//components/HeroElements.tsx
import { useState, useEffect } from 'react';

interface FloatingFeatherProps {
  delay: number;
}

export const GooseSVG = () => (
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

export const FloatingFeather = ({ delay }: FloatingFeatherProps) => {
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