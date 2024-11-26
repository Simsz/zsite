import { useState } from 'react';
import { Calendar, Building2 } from 'lucide-react';

interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  icon?: string;
}

const JobHistory = () => {
  const [activeJob, setActiveJob] = useState<number | null>(null);

  const jobs: Job[] = [
    {
      company: "Tech Corp",
      role: "Senior Full Stack Developer",
      period: "2022 - Present",
      description: "Leading development of enterprise-scale applications and mentoring junior developers.",
      achievements: [
        "Reduced deployment time by 60% through CI/CD pipeline optimization",
        "Implemented new microservices architecture",
        "Led team of 5 developers on major platform redesign"
      ],
      technologies: ["React", "Node.js", "AWS", "TypeScript"],
      icon: "👨‍💻"
    },
    {
      company: "StartUp Inc",
      role: "Full Stack Developer",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client-facing applications.",
      achievements: [
        "Increased user engagement by 40% through UI/UX improvements",
        "Built real-time analytics dashboard",
        "Optimized database queries reducing load times by 50%"
      ],
      technologies: ["Vue.js", "Python", "Docker", "PostgreSQL"],
      icon: "🚀"
    },
    {
      company: "Digital Agency",
      role: "Frontend Developer",
      period: "2018 - 2020",
      description: "Created responsive web applications for various clients.",
      achievements: [
        "Delivered 20+ client projects on time and within budget",
        "Implemented component library reducing development time by 30%",
        "Mentored 3 junior developers"
      ],
      technologies: ["React", "JavaScript", "SASS", "Git"],
      icon: "🎨"
    }
  ];

  return (
    <section className="relative bg-[#FFCC00] py-16">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="relative mb-16 inline-block">
          <h2 className="text-4xl font-black tracking-tight text-black before:absolute before:inset-0 before:bg-black/10 before:translate-x-1 before:translate-y-1 before:-z-10 after:absolute after:inset-0 after:bg-black/5 after:translate-x-2 after:translate-y-2 after:-z-20">
            EXPERIENCE
          </h2>
          <div className="absolute -bottom-2 left-0 w-full h-1 bg-black/10" />
          <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-black animate-slide-right" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-black/20 transform -translate-x-1/2" />

          {jobs.map((job, index) => (
            <div
              key={index}
              className={`relative mb-24 last:mb-0 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
              onMouseEnter={() => setActiveJob(index)}
              onMouseLeave={() => setActiveJob(null)}
            >
              {/* Timeline Node */}
              <div 
                className={`absolute left-1/2 top-0 -translate-x-1/2 w-12 h-12 rounded-full 
                  bg-black border-4 border-[#FFCC00] shadow-lg
                  transition-all duration-300 z-10
                  ${activeJob === index ? 'scale-110' : 'hover:scale-105'}`}
              >
                <span className="flex items-center justify-center h-full text-xl">
                  {job.icon}
                </span>
              </div>

              {/* Content Card */}
              <div 
                className={`relative inline-block max-w-xl 
                  ${index % 2 === 0 
                    ? 'mr-[calc(50%+2rem)] pr-8' 
                    : 'ml-[calc(50%+2rem)] pl-8'}`}
              >
                <div 
                  className={`bg-black p-6 rounded-2xl transform transition-all duration-300
                    ${activeJob === index 
                      ? `${index % 2 === 0 ? '-translate-x-2' : 'translate-x-2'} shadow-2xl` 
                      : `hover:${index % 2 === 0 ? '-translate-x-1' : 'translate-x-1'} hover:shadow-xl`}
                    relative overflow-hidden group`}
                >
                  {/* Corner Decorations */}
                  <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 
                    ${activeJob === index ? 'border-[#FFCC00]' : 'border-[#FFCC00]/30 group-hover:border-[#FFCC00]'} 
                    transition-all duration-500`} />
                  <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 
                    ${activeJob === index ? 'border-[#FFCC00]' : 'border-[#FFCC00]/30 group-hover:border-[#FFCC00]'} 
                    transition-all duration-500`} />

                  <h3 className="text-xl font-bold text-[#FFCC00] mb-1">{job.role}</h3>
                  <div className={`flex items-center gap-2 text-[#FFCC00]/70 mb-3 
                    ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <Building2 className="w-4 h-4" />
                    <span>{job.company}</span>
                  </div>
                  
                  <div className={`flex items-center gap-2 text-[#FFCC00]/70 mb-4
                    ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    <Calendar className="w-4 h-4" />
                    <span>{job.period}</span>
                  </div>

                  <p className={`text-[#FFCC00]/80 mb-4 transition-colors duration-300
                    ${activeJob === index ? 'text-[#FFCC00]' : ''}`}>
                    {job.description}
                  </p>

                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    {job.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium rounded-full border
                          transition-all duration-300
                          ${activeJob === index 
                            ? 'bg-[#FFCC00]/20 text-[#FFCC00] border-[#FFCC00]/40' 
                            : 'bg-[#FFCC00]/10 text-[#FFCC00] border-[#FFCC00]/20 hover:border-[#FFCC00]/40'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connector Line */}
                <div 
                  className={`absolute top-6 w-8 h-0.5 bg-black/20
                    ${index % 2 === 0 
                      ? 'right-0 translate-x-8' 
                      : 'left-0 -translate-x-8'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-right {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
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