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
  shortDescription?: string;
  image?: string;
  technologies?: string[];
  link?: string;
  github?: string;
  articles?: Article[];
  hideLiveLink?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

const TechPill = ({ name }: { name: string }) => (
  <span className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-[#FFCC00]/10 text-[#FFCC00]/80 border border-[#FFCC00]/20">
    {name}
  </span>
);

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showModal, setShowModal] = useState(false);
  const previewTech = project.technologies?.slice(0, 2) ?? [];
  const extraTechCount = Math.max(
    0,
    (project.technologies?.length ?? 0) - previewTech.length,
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="group flex h-full w-full flex-col overflow-hidden rounded-xl border border-[#FFCC00]/15 bg-[#0a0a0a] text-left transition-all duration-300 hover:border-[#FFCC00]/50 hover:bg-[#111]"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={project.image || "/images/placeholder.jpg"}
            alt={project.title}
            className="object-cover opacity-75 transition-all duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <h3 className="text-lg font-bold text-[#FFCC00] transition-colors group-hover:text-white">
              {project.title}
            </h3>
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[#FFCC00]/55 group-hover:text-[#FFCC00]/75">
              {project.shortDescription || project.description}
            </p>
          </div>

          {(previewTech.length > 0 || extraTechCount > 0) && (
            <div className="flex flex-wrap items-center gap-1.5">
              {previewTech.map((tech) => (
                <TechPill key={tech} name={tech} />
              ))}
              {extraTechCount > 0 && (
                <span className="text-xs text-[#FFCC00]/40">
                  +{extraTechCount}
                </span>
              )}
            </div>
          )}

          <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-medium text-[#FFCC00]/70 transition-colors group-hover:text-[#FFCC00]">
            View details
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </button>

      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="max-h-[92vh] w-[95vw] max-w-3xl overflow-hidden rounded-xl border border-[#FFCC00]/20 bg-[#0a0a0a] p-0 text-[#FFCC00]">
          <DialogTitle className="sr-only">
            {project.title} — project details
          </DialogTitle>

          <DialogClose className="absolute right-3 top-3 z-50 rounded-full bg-black/70 p-2 text-[#FFCC00] backdrop-blur-sm transition-colors hover:bg-black hover:text-white">
            <X className="h-5 w-5" />
          </DialogClose>

          <div className="relative aspect-[21/9] w-full shrink-0 bg-[#111] sm:aspect-[2/1]">
            <Image
              src={project.image || "/images/placeholder.jpg"}
              alt={project.title}
              className="object-cover"
              fill
              sizes="(max-width: 768px) 95vw, 768px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 pt-16">
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="max-h-[min(60vh,520px)] overflow-y-auto">
            <div className="space-y-6 p-6 sm:p-8">
              <p className="text-base leading-relaxed text-[#FFCC00]/75">
                {project.description}
              </p>

              {project.technologies && project.technologies.length > 0 && (
                <section>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFCC00]/40">
                    Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <TechPill key={tech} name={tech} />
                    ))}
                  </div>
                </section>
              )}

              {(project.link || project.github) && (
                <section className="flex flex-wrap gap-3">
                  {project.link && !project.hideLiveLink && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#FFCC00] px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-[#FFCC00]/90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#FFCC00]/30 px-5 py-2.5 text-sm font-semibold text-[#FFCC00] transition-colors hover:border-[#FFCC00]/60 hover:bg-[#FFCC00]/5"
                    >
                      <Github className="h-4 w-4" />
                      Source
                    </a>
                  )}
                </section>
              )}

              {project.articles && project.articles.length > 0 && (
                <section>
                  <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#FFCC00]/40">
                    Press & coverage
                  </h3>
                  <ul className="divide-y divide-[#FFCC00]/10 rounded-lg border border-[#FFCC00]/10">
                    {project.articles.map((article, index) => (
                      <li key={index}>
                        <a
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-start gap-3 px-4 py-3.5 text-sm text-[#FFCC00]/70 transition-colors hover:bg-[#FFCC00]/5 hover:text-[#FFCC00]"
                        >
                          <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-[#FFCC00]/40 group-hover:text-[#FFCC00]" />
                          <span className="flex-1 leading-snug">
                            {article.title}
                          </span>
                          <ArrowUpRight className="h-4 w-4 shrink-0 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export { ProjectCard };
