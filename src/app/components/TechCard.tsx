import Image from "next/image";
import { useState } from "react";

interface Tech {
  name: string;
  description: string;
  icon: string;
}

type TechCategory = "frontend" | "development" | "design" | string;

interface TechCardProps {
  tech: Tech;
  category: TechCategory;
  activeCategory: TechCategory | null;
}

const TechCard = ({ tech, category, activeCategory }: TechCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isActive = !activeCategory || activeCategory === category;

  const getGlowColor = () => {
    if (!isActive) return "rgba(75, 75, 75, 0.1)";
    switch (category) {
      case "frontend":
        return "rgba(239, 68, 68, 1)";
      case "development":
        return "rgba(59, 130, 246, 1)";
      case "design":
        return "rgba(34, 197, 94, 1)";
      default:
        return "rgba(255, 204, 0, 1)";
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "frontend":
        return "bg-red-500";
      case "development":
        return "bg-blue-500";
      case "design":
        return "bg-green-500";
      default:
        return "bg-yellow-500";
    }
  };

  const getBrandColor = (techName: string) => {
    switch (techName.toLowerCase()) {
      case "react":
        return "brand-react";
      case "next.js":
        return "brand-nextjs";
      case "tailwind":
        return "brand-tailwind";
      case "typescript":
        return "brand-typescript";
      case "git":
        return "brand-git";
      case "linux":
        return "brand-linux";
      default:
        return "yellow-400";
    }
  };

  const getIconColor = () => {
    if (!isActive) return "brightness-50 grayscale";
    return "brightness-100";
  };

  return (
    <div
      className={`relative py-3 px-4 bg-black rounded-xl border transition-all duration-500 
        ${isActive ? "opacity-100 scale-100" : "opacity-30 scale-95"} 
        hover:-translate-y-1`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        borderColor:
          isHovered && isActive ? getGlowColor() : "rgba(75, 75, 75, 0.2)",
        boxShadow:
          isHovered && isActive ? `0 4px 20px ${getGlowColor()}` : "none",
      }}
    >
      <div
        className={`md:hidden absolute -top-1 -right-1 w-2 h-2 rounded-full ${getCategoryColor()}`}
      />

      <div className="flex items-center space-x-4">
        <div
          className={`relative w-10 h-10 rounded-lg flex items-center justify-center shrink-0 
          transition-all duration-300
          ${isActive ? `bg-${getBrandColor(tech.name)} hover:bg-${getBrandColor(tech.name)}` : "bg-gray-900"}`}
        >
          <div
            className={`relative w-5 h-5 transition-all duration-300 ${getIconColor()}`}
          >
            <Image
              src={tech.icon}
              alt={`${tech.name} icon`}
              fill
              className="object-contain transition-all duration-300"
              sizes="20px"
              style={{
                filter:
                  isHovered && isActive ? "brightness(1.2)" : "brightness(1)",
              }}
            />
          </div>
        </div>

        <div className="text-left">
          <h3
            className={`text-base font-medium transition-colors duration-300
            ${isActive ? "text-[#FFCC00] group-hover:text-white" : "text-gray-600"}`}
          >
            {tech.name}
          </h3>
          <p
            className={`text-xs transition-colors duration-300
            ${isActive ? "text-[#FFCC00]/70 group-hover:text-[#FFCC00]" : "text-gray-700"}`}
          >
            {tech.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechCard;
