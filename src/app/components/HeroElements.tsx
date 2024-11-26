//components/HeroElements.tsx
import { useState, useEffect } from "react";
import Image from "next/image";

interface FloatingFeatherProps {
  delay: number;
}

export const GooseSVG = () => (
  <Image
    src="images/goose.svg"
    width={150}
    height={150}
    alt="Goose"
    className="text-black transition-transform duration-300"
  />
);

export const FloatingFeather = ({ delay }: FloatingFeatherProps) => {
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    setPosition({
      left: Math.random() * 100,
      top: Math.random() * 100,
    });
  }, []);

  return (
    <div
      className="absolute animate-float opacity-20"
      style={{
        animationDelay: `${delay}s`,
        left: `${position.left}%`,
        top: `${position.top}%`,
      }}
    >
      <svg viewBox="0 0 50 50" className="w-8 h-8 text-black rotate-45">
        <path fill="currentColor" d="M25,0 Q50,25 25,50 Q0,25 25,0" />
      </svg>
    </div>
  );
};
