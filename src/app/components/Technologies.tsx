import { useState } from "react";
import TechCard from "./TechCard";

interface CategoryButtonProps {
  color: string;
  hoverColor: string;
  label: string;
  onHover: (category: string) => void;
  onLeave: () => void;
}

interface Tech {
  name: string;
  description: string;
  icon: string;
  category: string;
}

interface Category {
  label: string;
  color: string;
  hoverColor: string;
  id: string;
}

const CategoryButton = ({
  color,
  hoverColor,
  label,
  onHover,
  onLeave,
}: CategoryButtonProps) => (
  <button
    onMouseEnter={() => onHover(label.toLowerCase())}
    onMouseLeave={() => onLeave()}
    className={`relative group flex items-center gap-3 p-3 bg-black/80 rounded-xl
      border border-white/5 transition-all duration-300 
      hover:-translate-x-1 hover:shadow-lg w-48`}
    style={{
      boxShadow: `0 0 20px ${color}00`,
    }}
  >
    <div
      className={`w-4 h-4 rounded-full ${color} 
        transition-all duration-300 group-hover:scale-125`}
      style={{
        boxShadow: `0 0 10px ${hoverColor}`,
        filter: `brightness(1.2)`,
      }}
    />
    <span
      className={`text-sm font-medium transition-colors duration-300 text-white/70 
      group-hover:text-white group-hover:translate-x-1`}
    >
      {label}
    </span>
  </button>
);

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const techs: Tech[] = [
    {
      name: "React",
      description: "JavaScript Library",
      icon: "/images/tech/react.svg",
      category: "frontend",
    },
    {
      name: "Next.JS",
      description: "React framework",
      icon: "/images/tech/nextdotjs.svg",
      category: "frontend",
    },
    {
      name: "Tailwind",
      description: "CSS framework",
      icon: "/images/tech/tailwindcss.svg",
      category: "frontend",
    },
    {
      name: "TypeScript",
      description: "JavaScript but better",
      icon: "/images/tech/typescript.svg",
      category: "development",
    },
    {
      name: "Git",
      description: "Version control",
      icon: "/images/tech/git.svg",
      category: "development",
    },
    {
      name: "Linux",
      description: "Design Tool",
      icon: "/images/tech/linux.svg",
      category: "design",
    },
  ];

  const categories: Category[] = [
    {
      label: "Frontend",
      color: "bg-red-500",
      hoverColor: "rgba(239, 68, 68, 1)",
      id: "frontend",
    },
    {
      label: "Development",
      color: "bg-blue-500",
      hoverColor: "rgba(59, 130, 246, 1)",
      id: "development",
    },
    {
      label: "Design",
      color: "bg-green-500",
      hoverColor: "rgba(34, 197, 94, 1)",
      id: "design",
    },
  ];

  return (
    <section className="relative py-16">
      <div className="absolute inset-0 bg-black">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded opacity-20"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              background: `rgba(255, 204, 0, ${0.05 + Math.random() * 0.1})`,
              boxShadow: "0 0 15px rgba(255, 204, 0, 0.1)",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="relative mb-16 inline-block">
          <h2 className="text-4xl font-black tracking-tight text-[#FFCC00] before:absolute before:inset-0 before:bg-[#FFCC00]/10 before:translate-x-1 before:translate-y-1 before:-z-10 after:absolute after:inset-0 after:bg-[#FFCC00]/5 after:translate-x-2 after:translate-y-2 after:-z-20">
            TECHNOLOGIES
          </h2>
          
          <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#FFCC00] animate-slide-right" />
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-white/5" />
        </div>

        {/* Mobile Category Legend */}
        <div className="md:hidden flex items-center justify-center gap-6 mb-8">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${category.color}`} />
              <span className="text-xs font-medium text-white/70">
                {category.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Buttons - Hidden on mobile */}
          <div className="hidden md:flex flex-col gap-4">
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                color={category.color}
                hoverColor={category.hoverColor}
                label={category.label}
                onHover={() => setActiveCategory(category.id)}
                onLeave={() => setActiveCategory(null)}
              />
            ))}
          </div>

          {/* Cards Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techs.map((tech) => (
              <TechCard
                key={tech.name}
                tech={tech}
                category={tech.category}
                activeCategory={activeCategory}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-right {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
        .animate-slide-right {
          animation: slide-right 1.5s ease-out forwards;
          transform-origin: left;
        }
      `}</style>
    </section>
  );
};

export { Technologies };
