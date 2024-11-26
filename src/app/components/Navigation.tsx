import Link from "next/link";
import { useState, useEffect } from "react";
import { GithubIcon, Mail, FileText, Menu, X, Briefcase } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      href: "/hire-me",
      label: "Hire Me",
      icon: Briefcase,
      style: "primary",
    },
    {
      href: "/contact",
      label: "Contact",
      icon: Mail,
      style: "outline",
    },
    {
      href: "/resume",
      label: "Resume",
      icon: FileText,
      style: "outline",
    },
    {
      href: "https://github.com/Simsz",
      label: "GitHub",
      icon: GithubIcon,
      style: "outline",
    },
  ];

  // Prevent scroll when menu is open
  if (typeof window !== "undefined") {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }

  return (
    <>
      <nav
        className={`w-full py-4 fixed top-0 z-50 transition-all duration-300
          ${
            isScrolled
              ? "bg-[#FFCC00] shadow-lg backdrop-blur-sm bg-opacity-90"
              : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center relative z-50">
            {/* Logo/Home Link */}
            <Link
              href="/"
              className={`text-black font-bold text-2xl transition-all duration-300 ${
                isScrolled
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              Zach Sims
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full 
                      transition-all duration-200 text-lg font-medium group
                      ${
                        link.style === "primary"
                          ? "bg-black text-[#FFCC00] hover:bg-black/90 hover:scale-105 transform"
                          : link.style === "filled"
                            ? "bg-black/90 text-[#FFCC00] hover:bg-black"
                            : "border-2 border-black text-black hover:bg-black hover:text-[#FFCC00]"
                      }`}
                  >
                    <link.icon className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-black hover:bg-black hover:text-[#FFCC00] rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#FFCC00] z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 px-4">
          {/* Navigation Links */}
          <ul className="flex flex-col space-y-4 flex-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 px-6 py-4 rounded-full 
                    transition-all duration-200 text-xl font-medium group w-full
                    ${
                      link.style === "primary"
                        ? "bg-black text-[#FFCC00] hover:bg-black/90"
                        : "border-2 border-black text-black hover:bg-black hover:text-[#FFCC00]"
                    }`}
                >
                  <link.icon className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Footer for Mobile Menu */}
          <div className="py-8 text-center text-black/80">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} tiny.dev
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export { Navigation };
