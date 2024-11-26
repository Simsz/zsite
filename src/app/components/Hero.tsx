import React, { useState, useEffect } from 'react';
import { GooseSVG, FloatingFeather } from './HeroElements';
import { Clock } from 'lucide-react';
import dynamic from 'next/dynamic';

const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-black animate-pulse" />
  ),
});

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAwake, setIsAwake] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      
      // Check if current time is between 8 AM and 1 AM
      const hour = now.getHours();
      setIsAwake(hour >= 8 || hour < 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-[#FFCC00]">
      <div className="relative">
        {[...Array(5)].map((_, i) => (
          <FloatingFeather key={i} delay={i * 2} />
        ))}
      </div>

      <section className="relative min-h-[100vh]">
        <div className="max-w-7xl mx-auto px-4 pt-28">
          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left relative z-20">              
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

            {/* Right Content - Goose and Time */}
            <div className="hidden md:flex flex-col justify-center items-center relative z-20 gap-8">
              <div className="transform hover:scale-110 transition-transform duration-300">
                <GooseSVG />
              </div>
              
              {/* Time and Status Display */}
              <div className="bg-black/10 backdrop-blur-sm rounded-xl p-6 w-full max-w-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg font-medium">
                      {currentTime.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      })}
                    </span>
                  </div>
                  <div 
                    className={`flex items-center gap-2 ${
                      isAwake ? 'text-green-700' : 'text-red-700'
                    }`}
                  >
                    <span className={`inline-block w-2 h-2 rounded-full ${
                      isAwake ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                    }`} />
                    <span className="font-medium">
                      {isAwake ? 'Awake' : 'Asleep'}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-black/60">
                  Usually awake 8:00 AM - 1:00 AM PST
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Container with Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-[900px] -mt-32 overflow-hidden">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFCC00] via-[#FFCC00]/70 via-20% to-transparent z-10" />
          
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