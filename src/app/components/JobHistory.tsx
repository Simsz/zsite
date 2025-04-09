import { useState, useEffect } from "react";
import { Calendar, Building2 } from "lucide-react";

interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon?: string;
  logoUrl?: string;
}

const JobHistory = () => {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [, setExpandedJob] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 750);
    };
    
    // Initial check
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  const jobs: Job[] = [
    {
      company: "YPC Media",
      role: "Senior Developer",
      period: "2023 - Present",
      description:
        "Led development of analytics and automation tools while managing backend infrastructure for 400+ customer websites. Engineered custom WordPress and CRM solutions to optimize sales operations and site performance.",
      achievements: [
        "Developed custom analytics software for management to track KPIs of sales team built on top of Zoho CRM",
        "Managed and maintained 400+ client-facing websites",
        "Developed custom WordPress plugin (PHP) to synchronize the asset cache across all sites.",
      ],
      technologies: ["Zoho CMS", "PHP", "React", "Deluge", "WordPress"],
      icon: "👨‍💻",
      logoUrl: "/images/ypcmedia.png",
    },
    {
      company: "Celik Enterprises Inc.",
      role: "Developer + Community Manager",
      period: "2018 - Present",
      description:
        "Directed community growth strategy and operations for a top global Twitch streamer, driving 35% increase in member engagement through data-driven events and content. Led development initiatives and managed contractor teams while maintaining positive relations across a 3-million-member community.",
      achievements: [
        "Increased user engagement by 40% through UI/UX improvements",
        "Built real-time analytics dashboard",
        "Optimized database queries reducing load times by 50%",
      ],
      technologies: ["Discord API", "Reddit API", "UX/UI Design Tools", "Docker", "Community Management Platforms"],
      icon: "🎮",
      logoUrl: "/images/celikenterprises.png",
      
    },
    {
      company: "Excellus BlueCross BlueShield",
      role: "Digital Developer I",
      period: "2022 - 2023",
      description: "Led development and maintenance of four corporate healthcare websites with mobile-first design principles. Optimized user experience through consumer feedback analysis while building comprehensive documentation and cloud infrastructure.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Implemented component library reducing development time by 30%",
        "Mentored 3 junior developers",
      ],
      technologies: ["S3", "Route53", "Lambda", "JavaScript", "Mobile-First Design"],
      icon: "🏥",
      logoUrl: "/images/bcbs.png",
    },
    {
      company: "CGI Digital",
      role: "Web Developer",
      period: "2021 - 2022",
      description: "Led development and maintenance of 1,900+ client websites while spearheading automation initiatives and cloud-based solutions. Architected custom internal tools and video rendering systems, ensuring AAA accessibility standards across all properties.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Implemented component library reducing development time by 30%",
        "Mentored 3 junior developers",
      ],
      technologies: ["AWS", "JS", "NexRender", "Git", "Wordpress", "PHP", "Adobe Suite"],
      icon: "🎥",
      logoUrl: "/images/cgidigital.jpeg",
    },
    {
      company: "Eagledream Technologies",
      role: "DevOps Web Developer",
      period: "2019 - 2020",
      description: "Developed and deployed web applications in an Agile environment while managing client relationships and project lifecycles. Built and maintained containerized infrastructure across multiple environments, ensuring seamless delivery of client solutions.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Implemented component library reducing development time by 30%",
        "Mentored 3 junior developers",
      ],
      technologies: ["CraftCMS", "AWS", "Fargate", "CodeCommit", "Agile/Scrum", "Docker"],
      icon: "🦅",
      logoUrl: "/images/eagledream.png",
    },
  ];

  return (
    <section className="relative bg-[#FFCC00] py-16">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="relative mb-16 inline-block">
          <h2 className="text-4xl md:text-4xl font-black tracking-tight text-black before:absolute before:inset-0 before:bg-black/10 before:translate-x-1 before:translate-y-1 before:-z-10 after:absolute after:inset-0 after:bg-black/5 after:translate-x-2 after:translate-y-2 after:-z-20">
            EXPERIENCE
          </h2>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-black/10" />
          <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-black animate-slide-right" />
        </div>

        {/* Mobile Experience List */}
        {isMobile && (
          <div className="mb-8">
            <ul className="space-y-4">
              {jobs.map((job, index) => (
                <li key={index} className="border-b border-black/10 pb-4 last:border-b-0">
                  <div className="flex items-center gap-3">
                    {job.logoUrl && (
                      <img 
                        src={job.logoUrl} 
                        alt={`${job.company} logo`} 
                        className="w-10 h-10 object-contain rounded-full border-2 border-black p-1 bg-white flex-shrink-0" 
                      />
                    )}
                    <div>
                      <h3 className="font-bold text-black">{job.role}</h3>
                      <div className="flex items-center text-black/70 text-sm">
                        <Building2 className="w-3 h-3 mr-1" />
                        <span>{job.company}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Timeline */}
        {!isMobile && (
          <div className="relative max-w-5xl mx-auto scale-[0.9] md:scale-100">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black/20 transform -translate-x-1/2" />

            {jobs.map((job, index) => (
              <div
                key={index}
                className={`relative mb-16 md:mb-24 last:mb-0 ${index % 2 === 0 ? "text-right" : "text-left"}`}
                onMouseEnter={() => setActiveJob(index)}
                onMouseLeave={() => setActiveJob(null)}
              >
                {/* Timeline Node */}
                <div
                  className={`absolute left-1/2 top-0 -translate-x-1/2 w-10 md:w-12 h-10 md:h-12 rounded-full 
                    bg-black border-4 border-[#FFCC00] shadow-lg
                    transition-all duration-300 z-10
                    ${activeJob === index ? "scale-110" : "hover:scale-105"}`}
                >
                  <span className="flex items-center justify-center h-full text-base md:text-xl">
                    {job.icon}
                  </span>
                </div>

                {/* Content Card */}
                <div
                  className={`relative inline-block max-w-[calc(42vw-2rem)] md:max-w-xl
                    ${index % 2 === 0 ? "mr-[calc(50%+2rem)] pr-8" : "ml-[calc(50%+2rem)] pl-8"}`}
                >
                  <div
                    className={`bg-black p-4 md:p-6 rounded-2xl transform transition-all duration-300
                      ${activeJob === index
                        ? `${index % 2 === 0 ? "-translate-x-2" : "translate-x-2"} shadow-2xl`
                        : `hover:${index % 2 === 0 ? "-translate-x-1" : "translate-x-1"} hover:shadow-xl`
                      }
                      relative overflow-hidden group`}
                    onMouseEnter={() => {
                      setActiveJob(index);
                      setExpandedJob(index);
                    }}
                    onMouseLeave={() => {
                      setActiveJob(null);
                      setExpandedJob(null);
                    }}
                  >
                    {/* Corner Decorations - Hidden on mobile */}
                    <div
                      className={`hidden md:block absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 
                      ${activeJob === index ? "border-[#FFCC00]" : "border-[#FFCC00]/30 group-hover:border-[#FFCC00]"} 
                      transition-all duration-500`}
                    />
                    <div
                      className={`hidden md:block absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 
                      ${activeJob === index ? "border-[#FFCC00]" : "border-[#FFCC00]/30 group-hover:border-[#FFCC00]"} 
                      transition-all duration-500`}
                    />

                    {/* Basic Info - Always Visible */}
                    <div className="flex flex-col">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"}`}>
                        {job.logoUrl && (
                          <img 
                            src={job.logoUrl} 
                            alt={`${job.company} logo`} 
                            className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-full border-2 border-[#FFCC00] p-1 bg-white"
                          />
                        )}
                        <div className="flex-1">
                          <h3 className={`text-base md:text-xl font-bold text-[#FFCC00] ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                            {job.role}
                          </h3>
                          <div className={`flex items-center gap-1 md:gap-2 text-[#FFCC00]/70
                            ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                          >
                            <Building2 className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-xs md:text-base">{job.company}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`flex items-center gap-1 md:gap-2 text-[#FFCC00]/70 mb-2
                        ${index % 2 === 0 ? "justify-end" : "justify-start"}`}
                      >
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        <span className="text-xs md:text-base">{job.period}</span>
                      </div>
                    </div>

                    {/* Expandable Content - Desktop Only */}
                    <div
                      className={`hidden md:block overflow-hidden transition-all duration-500 ease-in-out
                        ${activeJob === index ? "max-h-[500px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}
                    >
                      <p className="text-base text-[#FFCC00]/80 mb-4">
                        {job.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "justify-end" : "justify-start"}`}>
                        {job.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-sm font-medium rounded-full border bg-[#FFCC00]/10 text-[#FFCC00] border-[#FFCC00]/20 hover:border-[#FFCC00]/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connector Line */}
                  <div
                    className={`absolute top-6 w-8 h-0.5 bg-black/20
                      ${index % 2 === 0 ? "right-0 translate-x-8" : "left-0 -translate-x-8"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
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

export default JobHistory;
