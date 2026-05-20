// components/ProjectsGrid.jsx

import { ProjectCard } from "./ProjectCard";

const ProjectsGrid = () => {
  const projects = [
    {
      title: "Upfront Web Services",
      description:
        "Digital marketing agency: performance-focused sites and campaigns, built on Cloudflare, Stripe billing integrations, and hand-tuned HTML/CSS.",
      shortDescription: "Digital marketing agency",
      image: "/images/us_banner_g.png",
      technologies: ["Cloudflare", "Stripe", "HTML/CSS"],
      link: "https://upfrontws.com/",
    },
    {
      title: "RocHop",
      description: "Easy event aggregation and discovery for the Rochester, NY area.",
      shortDescription: "Local event aggregator",
      image: "/images/rochop.png",
      technologies: ["Cloudflare", "React", "Next.js", "Typescript"],
      github: "https://github.com/Simsz/hoproc",
      link: "https://rochop.com/",
      hideLiveLink: true,
    },
    {
      title: "TinyPM Link's",
      description: "One place to share all your links! Features a bring-your-own-domain (BYOD) feature with on-demand TLS, allowing you to use your own domain for your links",
      shortDescription: "Custom link in bio tool",
      image: "/images/tinypm2.png",
      technologies: ["Docker", "Caddy", "React", "Supabase", "PostgresSQL", "TailwindCSS", "Next.js", "Typescript", "OAUTH"],
      github: "https://github.com/Simsz/metinypm",
      link: "https://tiny.pm/",
      hideLiveLink: true,
    },
    {
      title: "Photography Gallery",
      description: "Hosted locally w/ Portainer, Docker + PhotoPrism. Just a simple way to view photos I've taken.",
      shortDescription: "Self-hosted photo gallery",
      image: "/images/zgallery.jpeg",
      technologies: ["Portainer", "Docker", "Photoprism", "Adobe"],
      link: "https://gallery.zachsims.com/s/pics/main",
      hideLiveLink: true,
    },
    {
      title: "TinyPM Game Servers",
      description: "Quick and easy server management with Pterodactyl Panel in Docker-compose stacks. Enables rapid server deployment and seamless configuration.",
      shortDescription: "Streamlined server management platform",
      image: "/images/tinypm.png",
      technologies: ["Docker", "Caddy", "Pterodactyl", "Laravel"],
      link: "https://panel.tiny.pm/",
      hideLiveLink: true,
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
      technologies: ["Discord API", "Node.js"],
      link: "https://discord.gg/tarik",
    },
    {
      title: "Pro City",
      description: "High-tier, competitive hub for pros to play against pros, providing a clean environment free from game-throwing and match-fixing.",
      shortDescription: "Pro competitive gaming platform",
      image: "/images/pcdisc.png",
      technologies: ["Node.js", "Discord", "Valorant", "Cloudflare"],
      link: "https://procity.gg",
      hideLiveLink: true,
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
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <header className="mb-10 sm:mb-12">
          <h2 className="text-3xl font-black tracking-tight text-[#FFCC00] sm:text-4xl">
            Projects
          </h2>
          <p className="mt-2 max-w-xl text-sm text-[#FFCC00]/50 sm:text-base">
            A selection of things I&apos;ve built — click any card for the full
            story.
          </p>
        </header>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectsGrid };
