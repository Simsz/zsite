"use client";

import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Footer } from "../app/components/Footer";
import { Navigation } from "../app/components/Navigation";
import { ProjectsGrid } from "../app/components/ProjectsGrid";
import { Technologies } from "../app/components/Technologies";
import JobHistory from "../app/components/JobHistory";
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
      <div className="relative bg-[#FFCC00] min-h-screen">

        <Navigation />

        <Hero />
      </div>

      <main className="bg-black text-[#FFCC00]">
        <div className="relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 transform translate-x-1/2 -translate-y-1/2 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="currentColor"
                className="text-gray-200"
              />
              <path
                d="M50,10 Q90,50 50,90 Q10,50 50,10"
                fill="currentColor"
                className="text-gray-300"
              />
            </svg>
          </div>
          <Technologies />
        </div>

        <JobHistory />

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
