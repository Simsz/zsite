// components/Hero.tsx
import { GooseSVG, FloatingFeather } from './HeroElements';
import dynamic from 'next/dynamic';

// Import Map component dynamically to avoid SSR issues
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-black rounded-lg animate-pulse border-2 border-[#FFCC00]" />
  ),
});

const Hero = () => {
  return (
    <div className="relative bg-[#FFCC00] min-h-screen">
      <div className="relative">
        {[...Array(5)].map((_, i) => (
          <FloatingFeather key={i} delay={i * 2} />
        ))}
      </div>

      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="mb-8 transform hover:scale-110 transition-transform duration-300 inline-block">
                <GooseSVG />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
                Hi, I&apos;m Zach
              </h1>
              
              <div>
                <p className="text-xl md:text-2xl text-black/80 mb-8 leading-relaxed">
                  I&apos;m a developer who loves creating elegant solutions and has a 
                  peculiar fascination with geese. When I&apos;m not coding, you might 
                  find me bird watching or optimizing server deployments.
                </p>
                
                <div className="flex flex-wrap md:justify-start justify-center gap-4 text-lg">
                  {['Node.js', 'Python', 'AWS', 'Docker'].map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 bg-black text-[#FFCC00] rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="h-[400px] w-full relative">
              <Map />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Hero };