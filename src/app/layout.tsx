import type { Metadata } from "next";
import { Toaster } from "@/app/components/ui/toaster";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Zach Sims Portfolio",
  description: "It's me, Zach!",
  icons: {
    icon: '/favicon.ico',
  },
  themeColor: '#ffcc00',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#ffcc00' }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
