import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section className="bg-[#FFCC00] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-black/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black mb-4">Get In Touch</h2>
          <p className="text-black/80 text-lg max-w-2xl mx-auto">
            Have a question or want to work together? Reach out on LinkedIn or
            send an email — I&apos;ll get back to you as soon as I can.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-black p-8 rounded-2xl shadow-xl">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://www.linkedin.com/in/zachesims/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium
                  bg-[#FFCC00] text-black hover:bg-[#FFCC00]/90 transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/50"
              >
                <Linkedin className="w-5 h-5" />
                Message on LinkedIn
              </Link>
              <Link
                href="mailto:hello@tiny.pm"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-medium
                  border-2 border-[#FFCC00] text-[#FFCC00] hover:bg-[#FFCC00]/10 transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-[#FFCC00]/30"
              >
                <Mail className="w-5 h-5" />
                hello@tiny.pm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
