"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Footer } from "../app/components/Footer";
import { Navigation } from "../app/components/Navigation";
import { ProjectsGrid } from "../app/components/ProjectsGrid";
// Technologies section hidden for now — component kept in Technologies.tsx
import Hero from "../app/components/Hero";
import Contact from "../app/components/Contact";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      <div className="relative bg-[#FFCC00] h-[80vh] min-h-[440px] mobile:min-h-[450px] medium:min-h-[790px] short:min-h-[790px]">
        <Navigation />
        <Hero />
      </div>

      <main className="bg-black text-[#FFCC00]">
        <div className="relative">
          <div className="absolute inset-0 bg-grid-gray-100 opacity-5" />
          <ProjectsGrid />
        </div>
      </main>

      <Contact />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-8 right-8 p-3 bg-[#FFCC00] rounded-full shadow-lg transition-all duration-300 hover:shadow-xl ${
          scrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <ArrowDown className="w-6 h-6 transform rotate-180 text-black" />
      </button>

      <Footer />

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .bg-grid-gray-100 {
          background-image: linear-gradient(
              to right,
              #f1f1f1 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, #f1f1f1 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}
