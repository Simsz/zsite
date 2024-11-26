// app/api/send-email/route.ts

import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { z } from 'zod';
import DOMPurify from 'isomorphic-dompurify';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Rate limiting map
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_DURATION = 3600000; // 1 hour in milliseconds
const MAX_REQUESTS = 5; // Maximum requests per hour

// Validation schema using Zod
const ContactSchema = z.object({
  name: z.string()
    .min(1, 'Name is required')
    .max(100, 'Name is too long')
    .regex(/^[a-zA-Z0-9\s'-]*$/, 'Invalid characters in name'),
  
  email: z.string()
    .email('Invalid email address')
    .max(254, 'Email is too long'), // Maximum length for email addresses
  
  message: z.string()
    .min(1, 'Message is required')
    .max(1500, 'Message is too long') // Adjust max length as needed
    .regex(/^[\s\S]*$/, 'Invalid characters in message'),
});

function sanitizeInput(input: string): string {
  // Remove any HTML tags and encode special characters
  return DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [], // No HTML tags allowed
    ALLOWED_ATTR: [], // No attributes allowed
  }).trim();
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const userLimit = rateLimitMap.get(ip);

  if (!userLimit) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - userLimit.timestamp > RATE_LIMIT_DURATION) {
    // Reset if duration has passed
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (userLimit.count >= MAX_REQUESTS) {
    return false;
  }

  userLimit.count++;
  return true;
}

// Clean up old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of rateLimitMap.entries()) {
    if (now - data.timestamp > RATE_LIMIT_DURATION) {
      rateLimitMap.delete(ip);
    }
  }
}, RATE_LIMIT_DURATION);

export async function POST(req: Request) {
  try {
    // Get client IP
    const ip = req.headers.get('x-forwarded-for') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate the request body
    const body = await req.json();
    const result = ContactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: 'Invalid input data', details: result.error.errors },
        { status: 400 }
      );
    }

    // Sanitize all inputs
    const sanitizedData = {
      name: sanitizeInput(result.data.name),
      email: sanitizeInput(result.data.email),
      message: sanitizeInput(result.data.message),
    };

    // Additional email validation regex
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(sanitizedData.email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    const msg = {
      to: 'zachesims@gmail.com',
      from: 'no-reply@tiny.pm',
      subject: `ZachSims.com | New message from ${sanitizedData.name}`,
      text: `
        Name: ${sanitizedData.name}
        Email: ${sanitizedData.email}
        Message: ${sanitizedData.message}
      `,
      html: `
        <h3>ZachSims.com | New Contact Submission</h3>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${sanitizedData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${sanitizedData.message.replace(/\n/g, '<br>')}</p>
      `,
    };

    await sgMail.send(msg);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}