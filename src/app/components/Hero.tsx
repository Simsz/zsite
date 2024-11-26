import React from 'react';
import { GooseSVG, FloatingFeather } from './HeroElements';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-black animate-pulse" />
  ),
});

const Hero = () => {
  return (
    <div className="relative bg-[#FFCC00]">
      <div className="relative">
        {[...Array(5)].map((_, i) => (
          <FloatingFeather key={i} delay={i * 2} />
        ))}
      </div>

      <section className="relative min-h-[100vh]">
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-32">
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="mb-8 transform hover:scale-110 transition-transform duration-300 inline-block">
                <GooseSVG />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
                Hi, I&apos;m Zach
              </h1>
              
              <div>
                <p className="text-xl md:text-2xl text-black/80 mb-8 leading-relaxed">
                  I&apos;m a developer who loves creating elegant solutions and has a 
                  peculiar fascination with geese. When I&apos;m not coding, you might 
                  find me bird watching or optimizing server deployments.
                </p>
                
                <div className="flex flex-wrap md:justify-start justify-center gap-4 text-lg">
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
          </div>
        </div>

        {/* Map Container with Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[600px] overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFCC00] via-[#FFCC00]/50 to-transparent z-10" />
          
          {/* Map */}
          <div className="absolute inset-0">
            <Map />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;