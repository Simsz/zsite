// components/ProjectsGrid.jsx

import { ProjectCard } from "./ProjectCard";

const ProjectsGrid = () => {
  const projects = [
    {
      title: "TinyPM",
      description:
        "Quick and easy server management with Pterodactyl Panel in Docker-compose stacks.",
      image: "/images/tinypm.png",
      technologies: ["Docker", "Node.js", "React", "Tailwind"],
      github: "https://github.com/yourusername/tinypm",
      link: "https://panel.tiny.pm",
    },
    {
      title: "Liar's Bar",
      description:
        "Web based version of Russian Roulette, built with HTML5, CSS3 and Javascript.",
      image: "/images/liarsbar.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://liar.tiny.pm",
    },
    {
      title: "Martine",
      description:
        "Proof of concept website for a local bar using Astro, React and TailwindCSS.",
      image: "/images/martine.png",
      technologies: ["Astro", "React", "TailwindCSS"],
      link: "https://martine.tiny.pm",
      articles: [
        {
          title: "How we built Martine's website",
          link: "https://yourblog.com/martine-case-study",
        },
      ],
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-[#FFCC00] mb-8">PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectsGrid };
