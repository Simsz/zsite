import Link from "next/link";
import {
  GithubIcon,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/Simsz/",
      icon: GithubIcon,
      label: "GitHub",
    },
    {
      href: "https://bsky.app/profile/tiny.pm",
      icon: Twitter,
      label: "BlueSky",
    },
    {
      href: "https://www.linkedin.com/in/zachesims/",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:hello@tiny.pm",
      icon: Mail,
      label: "Email",
    },
  ];

  return (
    <footer className="w-full bg-black text-[#FFCC00] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold hover:opacity-80 transition-opacity inline-block"
            >
              zachsi.ms/
            </Link>
            <p className="text-[#FFCC00]/80">
              Creating elegant solutions with a peculiar fascination for geese.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            {/* <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About", href: "/about" },
                { label: "Projects", href: "/#projects" },
                { label: "Resume", href: "/resume" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 text-[#FFCC00]/80 hover:text-[#FFCC00] transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border-2 border-[#FFCC00] flex items-center justify-center 
                    hover:bg-[#FFCC00] hover:text-black transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FFCC00]/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <p className="text-[#FFCC00]/80 text-sm">
              &copy; {new Date().getFullYear()} zachsi.ms All rights reserved.
            </p>
            {/* Map Attribution */}
            <p className="text-[#FFCC00]/60 text-sm">
              Map data ©{" "}
              <a
                href="https://www.maptiler.com"
                className="hover:text-[#FFCC00]"
                target="_blank"
                rel="noopener noreferrer"
              >
                MapTiler
              </a>{" "}
              ©{" "}
              <a
                href="https://www.openstreetmap.org/copyright"
                className="hover:text-[#FFCC00]"
                target="_blank"
                rel="noopener noreferrer"
              >
                OpenStreetMap contributors
              </a>
            </p>
          </div>
          {/* <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-[#FFCC00]/80 hover:text-[#FFCC00] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[#FFCC00]/80 hover:text-[#FFCC00] transition-colors"
            >
              Terms of Service
            </Link>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export { Footer };
