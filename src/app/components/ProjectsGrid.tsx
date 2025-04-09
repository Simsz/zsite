// components/ProjectsGrid.jsx

import { ProjectCard } from "./ProjectCard";

const ProjectsGrid = () => {
  const projects = [
    {
      title: "RocHop",
      description: "Easy event aggregation and discovery for the Rochester, NY area.",
      shortDescription: "Local event aggregator",
      image: "/images/rochop.png",
      technologies: ["Cloudflare", "React", "Next.js", "Typescript"],
      github: "https://github.com/Simsz/hoproc",
      link: "https://rochop.com/",
    },
    {
      title: "TinyPM Link's",
      description: "One place to share all your links! Features a bring-your-own-domain (BYOD) feature with on-demand TLS, allowing you to use your own domain for your links",
      shortDescription: "Custom link in bio tool",
      image: "/images/tinypm2.png",
      technologies: ["Docker", "Caddy", "React", "Supabase", "PostgresSQL", "TailwindCSS", "Next.js", "Typescript", "OAUTH"],
      github: "https://github.com/Simsz/metinypm",
      link: "https://tiny.pm/",
    },
    {
      title: "Photography Gallery",
      description: "Hosted locally w/ Portainer, Docker + PhotoPrism. Just a simple way to view photos I've taken.",
      shortDescription: "Self-hosted photo gallery",
      image: "/images/zgallery.jpeg",
      technologies: ["Portainer", "Docker", "Photoprism", "Adobe"],
      link: "https://gallery.zachsims.com/s/pics/main",
    },
    {
      title: "TinyPM Game Servers",
      description: "Quick and easy server management with Pterodactyl Panel in Docker-compose stacks. Enables rapid server deployment and seamless configuration.",
      shortDescription: "Streamlined server management platform",
      image: "/images/tinypm.png",
      technologies: ["Docker", "Caddy", "Pterodactyl", "Laravel"],
      link: "https://panel.tiny.pm/",
      articles: [
        {
          title: "TinyPM Game Servers Discord",
          link: "https://discord.tiny.pm/",
        },
      ],
    },
    {
      title: "Tarik Discord",
      description: "Official community server for Twitch streamer and esports professional Tarik Celik, hosting events, competitions and community engagement.",
      shortDescription: "Community hub for Tarik Celik",
      image: "/images/discord.png",
      technologies: ["Discord API", "Node.js", "Community Tools"],
      link: "https://discord.gg/tarik",
    },
    {
      title: "Pro City",
      description: "High-tier, competitive hub for pros to play against pros, providing a clean environment free from game-throwing and match-fixing.",
      shortDescription: "Pro competitive gaming platform",
      image: "/images/pcdisc.png",
      technologies: ["Node.js", "Discord", "Valorant", "Cloudflare"],
      link: "https://procity.gg",
      articles: [
        {
          title: "VALORANT pros fight back against trolls and crypto gamblers with 'Pro City'",
          link: "https://sg.news.yahoo.com/valorant-pros-create-pro-city-to-counter-trolls-crypto-gamblers-055632523.html",
        },
        {
          title: "VALORANT Pro City — a private ranked queue for pro players?",
          link: "https://esports.gg/news/valorant/valorant-pro-city-a-private-ranked-queue-for-pro-players/",
        },
        {
          title: "How Tarik's Pro City 10-man server will affect the state of NA Valorant's ranked matchmaking",
          link: "https://www.sportskeeda.com/valorant/how-tarik-s-pro-city-10-man-server-will-affect-state-na-valorant-ranked-matchmaking",
        },
        {
          title: "What is Valorant Pro City? tarik’s 10-man server explained",
          link: "https://www.dexerto.com/valorant/what-is-pro-city-tariks-10-man-valorant-server-explained-2042885/",
        },
        {
          title: "Valorant News: Riot Won’t Shut Down Former CS:GO Pro Turned Streamer Tarik’s Pro City!",
          link: "https://thesportsrush.com/valorant-news-riot-wont-shut-down-former-csgo-pro-turned-streamer-tariks-pro-city/",
        },
        {
          title: "Shroud admits he shouldn’t be “allowed” into tarik’s Valorant Pro City 10-man server",
          link: "https://www.dexerto.com/valorant/shroud-admits-he-shouldnt-be-allowed-into-tariks-valorant-pro-city-10-man-server-2052966/",
        },
      ],
    },
    {
      title: "Tarik.GG",
      description: "Custom scrim and practice servers for CS:GO players, optimized for skill development with minimal divergence from vanilla gameplay.",
      shortDescription: "CS:GO practice and scrim platform.",
      image: "/images/tarikgg.png",
      technologies: ["CSAPI", "Node.js", "SourceMod"],
      link: "https://tarik.gg",
    },
    {
      title: "Splits",
      description: "Quick mobile and desktop tool to calculate splits for any distance, supporting both metric and imperial measurements with conversion capabilities.",
      shortDescription: "Distance split calculator tool.",
      image: "/images/splits_phone.png",
      technologies: ["JavaScript", "Responsive Design", "PWA"],
      link: "https://splits.zachsims.com",
    },
    {
      title: "GetRekt",
      description: "Custom file server, link shortener and image host with ShareX API support.",
      shortDescription: "Multi-purpose file sharing platform.",
      image: "/images/getrekt_dark.png",
      technologies: ["Node.js", "ShareX API"],
      link: "https://getrekt.cc",
      articles: [
        {
          title: "Example Image",
          link: "https://share.getrekt.cc/i/HaTpDK",
        },
        {
          title: "Example Code",
          link: "https://paste.getrekt.cc/nmqKdJ/python",
        },
      ],
    },
    {
      title: "Martine",
      description:
        "Proof of concept website for a local bar using Astro, React and TailwindCSS.",
      shortDescription: "Proof of concept website for a local bar.",
      image: "/images/martine.png",
      technologies: ["Astro", "React", "TailwindCSS"],
      link: "https://martine.tiny.pm",
      
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
