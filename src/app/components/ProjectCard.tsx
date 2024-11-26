import { useState } from "react";
import Image from "next/image";
import { Github, ExternalLink, BookOpen, ArrowUpRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/app/components/ui/dialog";

interface Article {
  title: string;
  link: string;
}

interface Project {
  title: string;
  description: string;
  shortDescription?: string; // Optional short description
  image?: string;
  technologies?: string[];
  link?: string;
  github?: string;
  articles?: Article[];
}

interface TechTagProps {
  name: string;
  variant?: "default" | "modal";
}

interface ProjectCardProps {
  project: Project;
}

// Helper function to truncate text
const truncateText = (text: string, maxLength: number = 50): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
};

const TechTag = ({ name, variant = "default" }: TechTagProps) => (
  <span
    className={`px-3 py-1 text-sm font-medium rounded-full shadow-sm 
    hover:scale-105 hover:shadow-md transition-all duration-200 cursor-default
    ${
      variant === "modal"
        ? "bg-black text-[#FFCC00] hover:bg-black/90"
        : "bg-[#FFCC00] text-black"
    }`}
  >
    {name}
  </span>
);

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showModal, setShowModal] = useState(false);
  
  // Use shortDescription if provided, otherwise truncate the full description
  const cardDescription = project.shortDescription || truncateText(project.description);

  return (
    <>
      <div
        onClick={() => setShowModal(true)}
        className="group relative overflow-hidden rounded-2xl bg-black 
          border-2 border-[#FFCC00]/30 hover:border-[#FFCC00] transition-all duration-500 cursor-pointer
          hover:shadow-2xl hover:shadow-[#FFCC00]/10 hover:-translate-y-1"
      >
        {/* Image Container */}
        <div className="h-[48%] relative overflow-hidden">
          <Image
            src={project.image || "/images/placeholder.jpg"}
            alt={project.title}
            className="object-cover opacity-60 group-hover:opacity-90 transition-all duration-500 
              group-hover:scale-105 transform-gpu"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black 
            opacity-70 group-hover:opacity-90 transition-opacity duration-500"
          />
        </div>

        {/* Content Container */}
        <div className="relative h-[50%] bg-black p-6 group-hover:bg-black/95 transition-colors duration-500">
          <div className="flex flex-wrap gap-2 mb-3 -mt-12 relative z-10">
            {project.technologies
              ?.slice(0, 3)
              .map((tech: string, index: number) => (
                <div
                  key={tech}
                  className="transform transition-all duration-500"
                  style={{
                    transitionDelay: `${index * 50}ms`,
                    transform: "translateY(0)",
                  }}
                >
                  <TechTag name={tech} />
                </div>
              ))}
            {(project.technologies?.length ?? 0) > 3 && (
              <span className="text-sm text-[#FFCC00]/70 self-center">
                +{(project.technologies?.length ?? 0) - 3} more
              </span>
            )}
          </div>

          <h3
            className="text-2xl font-bold text-[#FFCC00] transition-colors duration-300
            group-hover:text-[#FFCC00]"
          >
            {project.title}
          </h3>

          <p
            className="text-[#FFCC00]/70 group-hover:text-[#FFCC00]/90 text-base mb-4
            transition-colors duration-300"
          >
            {cardDescription}
          </p>

          <button
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFCC00] text-black 
              rounded-full transition-all duration-300 transform
              hover:bg-[#FFCC00]/90 hover:gap-3 group/btn mt-auto"
          >
            Learn More
            <ArrowUpRight
              className="w-4 h-4 transition-all duration-300 
              group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
          </button>
        </div>

        {/* Corner Decorations */}
        <div
          className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#FFCC00]/30 
          group-hover:border-[#FFCC00] transition-all duration-500"
        />
        <div
          className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#FFCC00]/30 
          group-hover:border-[#FFCC00] transition-all duration-500"
        />
      </div>

      {/* Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-w-4xl md:w-[85vw] w-[95vw] bg-black p-0 rounded-2xl overflow-hidden">
          <DialogTitle className="sr-only">
            {project.title} - Project Details
          </DialogTitle>

          <DialogClose className="absolute right-4 top-4 z-50 p-2 rounded-full bg-black/80 hover:bg-black text-[#FFCC00] hover:text-[#FFCC00] transition-all duration-200 hover:scale-110">
            <X className="w-5 h-5" />
          </DialogClose>

          <div className="relative aspect-video bg-[#111]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #222 1px, transparent 0)`,
                backgroundSize: "20px 20px",
              }}
            />

            <Image
              src={project.image || "/images/placeholder.jpg"}
              alt={project.title}
              className="object-cover rounded-t-2xl relative z-10"
              fill
              sizes="100vw"
              priority
            />
          </div>

          <div className="p-8 bg-[#FFCC00]">
            <h2 className="text-3xl font-bold text-black mb-4">
              {project.title}
            </h2>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies?.map((tech: string) => (
                <TechTag key={tech} name={tech} variant="modal" />
              ))}
            </div>

            <p className="text-black/80 text-lg mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-[#FFCC00] 
                    rounded-full hover:bg-black/90 transition-all duration-300 hover:gap-3 group"
                >
                  <ExternalLink className="w-5 h-5" />
                  Visit Live Site
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 
                    group-hover:-translate-y-0.5"
                  />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-[#FFCC00] 
                    rounded-full hover:bg-black/90 transition-all duration-300 hover:gap-3 group"
                >
                  <Github className="w-5 h-5" />
                  View Source
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 
                    group-hover:-translate-y-0.5"
                  />
                </a>
              )}

              {project.articles && project.articles.length > 0 && (
                <div className="w-full mt-6">
                  <h3 className="text-xl font-semibold text-black mb-4">
                    Featured Articles
                  </h3>
                  <ul className="space-y-3">
                    {project.articles.map((article: Article, index: number) => (
                      <li key={index}>
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 text-black/80 hover:text-black 
                            transition-all duration-300 hover:gap-4 group"
                        >
                          <BookOpen className="w-5 h-5" />
                          {article.title}
                          <ArrowUpRight
                            className="w-4 h-4 transition-transform 
                            group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { ProjectCard };