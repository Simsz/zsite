'use client';

import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';
import { Footer } from '../app/components/Footer';
import { Navigation } from '../app/components/Navigation';
import { ProjectsGrid } from '../app/components/ProjectsGrid';
import { Technologies } from '../app/components/Technologies';

interface FloatingFeatherProps {
  delay: number;
}

const GooseSVG = () => (
  <svg viewBox="0 0 100 100" className="w-16 h-16 text-black">
    <path
      fill="currentColor"
      d="M70,30 Q80,30 85,40 T90,60 Q90,80 70,85 L60,87 Q40,90 30,80 T25,50 Q25,30 40,25 T70,30 Z"
    />
    <circle fill="currentColor" cx="75" cy="35" r="2" />
    <path
      fill="currentColor"
      d="M80,38 Q82,39 84,38" 
      strokeWidth="1"
      stroke="currentColor"
    />
  </svg>
);

const FloatingFeather = ({ delay }: FloatingFeatherProps) => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    setPosition({
      left: Math.random() * 100,
      top: Math.random() * 100
    });
  }, []);

  return (
    <div 
      className="absolute animate-float opacity-20"
      style={{ 
        animationDelay: `${delay}s`,
        left: `${position.left}%`,
        top: `${position.top}%`
      }}
    >
      <svg viewBox="0 0 50 50" className="w-8 h-8 text-black rotate-45">
        <path
          fill="currentColor"
          d="M25,0 Q50,25 25,50 Q0,25 25,0"
        />
      </svg>
    </div>
  );
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      <div className="relative bg-[#FFCC00] min-h-screen">
        <div className="relative">
          {[...Array(5)].map((_, i) => (
            <FloatingFeather key={i} delay={i * 2} />
          ))}
        </div>

        <Navigation />

        <section className="relative min-h-[80vh] flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 py-20 text-center">
            <div className="mb-8 transform hover:scale-110 transition-transform duration-300">
              <GooseSVG />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
              Hi, I&apos;m Your Name
            </h1>
            
            <div className="max-w-2xl mx-auto">
              <p className="text-xl md:text-2xl text-black/80 mb-8 leading-relaxed">
                I&apos;m a developer who loves creating elegant solutions and has a 
                peculiar fascination with geese. When I&apos;m not coding, you might 
                find me bird watching or optimizing server deployments.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 text-lg">
                {['Node.js', 'Python', 'AWS', 'Docker'].map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-black text-[#FFCC00] rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <main className="bg-black text-[#FFCC00]">
        <div className="relative">
          <div className="absolute inset-0 bg-grid-gray-100 opacity-5" />
          <ProjectsGrid />
        </div>

        <div className="relative overflow-hidden">
          <div className="absolute right-0 top-0 w-64 h-64 transform translate-x-1/2 -translate-y-1/2 opacity-5">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <circle cx="50" cy="50" r="40" fill="currentColor" className="text-gray-200" />
              <path
                d="M50,10 Q90,50 50,90 Q10,50 50,10"
                fill="currentColor"
                className="text-gray-300"
              />
            </svg>
          </div>
          <Technologies />
        </div>
      </main>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 p-3 bg-[#FFCC00] rounded-full shadow-lg transition-all duration-300 hover:shadow-xl ${
          scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ArrowDown className="w-6 h-6 transform rotate-180 text-black" />
      </button>

      <Footer />

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .bg-grid-gray-100 {
          background-image: linear-gradient(to right, #f1f1f1 1px, transparent 1px),
            linear-gradient(to bottom, #f1f1f1 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
}