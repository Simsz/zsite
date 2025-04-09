import React, { useState, useEffect } from "react";
// import { GooseSVG, FloatingFeather } from "./HeroElements";
import { GooseSVG } from "./HeroElements";
import { Clock, MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-black animate-pulse" />
  ),
});

const Hero = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isAwake, setIsAwake] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      const hour = now.getHours();
      setIsAwake(hour >= 8 || hour < 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const StatusDisplay = () => (
    <div className="bg-black/10 backdrop-blur-sm rounded-xl p-4 w-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          <span className="text-base font-medium">
            {currentTime.toLocaleTimeString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              hour12: true,
            })}
          </span>
        </div>
        <div
          className={`flex items-center gap-2 ${isAwake ? "text-green-700" : "text-red-700"}`}
        >
          <span
            className={`inline-block w-2 h-2 rounded-full ${
              isAwake ? "bg-green-500 animate-pulse" : "bg-red-500"
            }`}
          />
          <span className="font-bold">{isAwake ? "Online" : "Offline"}</span>
        </div>
      </div>
      <div className="text-sm text-black/60">
        Am I awake? Check my status and local time to see if I&apos;m available
        for a chat.
      </div>
    </div>
  );

  return (
    <div className="relative bg-[#FFCC00] min-h-screen isolate">
      {/* Map with gradient - only visible in tall layout */}
      <div className="absolute inset-0 z-10">
        <div className="hidden tall:block absolute bottom-0 left-0 right-0 h-[1000px] -mt-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFCC00] via-[#FFCC00]/100 via-0% to-25% to-transparent z-10" />
          <div className="absolute inset-0">
            <Map />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        {/* <div className="relative">
          {[...Array(5)].map((_, i) => (
            <FloatingFeather key={i} delay={i * 2} />
          ))}
        </div> */}

        <div className="max-w-7xl mx-auto px-4 pt-20">
          {/* Tall viewport layout */}
          <div className="hidden tall:block">
            <div className="grid grid-cols-2 gap-8 items-start pt-4">
              <div className="relative">
                <div className="p-6 rounded-2xl">
                  <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-black">
                    Hi, I&apos;m Zach
                  </h1>
                  <p className="text-xl lg:text-2xl text-black/80 mb-8 leading-relaxed">
                    I&apos;m a developer who loves creating elegant solutions
                    and has an appreciation for birds of all types. When I&apos;m not
                    coding, you might find me out exploring the world or photographing it.
                  </p>
                  <div className="flex flex-wrap gap-4 text-lg">
                    {["Full-Stack", "AWS Certified", "7+ YOE"].map(
                      (tech, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 bg-black text-[#FFCC00] rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-8 items-center">
                <div className="flex justify-center w-full">
                  <div className="transform hover:scale-110 transition-transform duration-300">
                    <GooseSVG />
                  </div>
                </div>
                <StatusDisplay />
              </div>
            </div>
          </div>

          {/* Medium viewport layout */}
          <div className="hidden medium:block">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col">
                <div className="relative flex-1">
                  <div className="p-6 rounded-2xl h-full flex flex-col justify-between">
                    <div>
                      <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-black">
                        Hi, I&apos;m Zach
                      </h1>
                      <p className="text-xl lg:text-2xl text-black/80 mb-8 leading-relaxed">
                        I&apos;m a developer who loves creating elegant
                        solutions and has a peculiar fascination with geese.
                        When I&apos;m not coding, you might find me bird
                        watching or optimizing server deployments.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-lg">
                      {["Full-Stack", "AWS Certified", "7+ YOE"].map(
                        (tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-black text-[#FFCC00] rounded-full shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex justify-center pt-10">
                  <div className="transform hover:scale-110 transition-transform duration-300">
                    <GooseSVG />
                  </div>
                </div>
                <div className="flex-1"></div>
                <div className="w-full pr-4">
                  <StatusDisplay />
                </div>
              </div>
            </div>
            {/* Full-width map section for medium height */}
            <div className="w-full px-4 pb-8 mt-4">
              <div
                className="relative w-full overflow-hidden rounded-lg shadow-lg"
                style={{
                  height: "clamp(150px, calc(100vh - 700px), 300px)",
                }}
              >
                <Map />
              </div>
            </div>
          </div>

          {/* Short viewport layout */}
          <div className="hidden short:block">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-9">
              <div className="md:pr-8 flex flex-col justify-between h-[300px]">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">
                    Hi, I&apos;m Zach
                  </h1>
                  <p className="text-base md:text-lg text-black/80 mb-4 leading-relaxed">
                    I&apos;m a developer who loves creating elegant solutions
                    and has a peculiar fascination with geese.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Full-Stack", "AWS Certified", "7+ Years"].map(
                      (tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-black text-[#FFCC00] rounded-full text-sm shadow-sm"
                        >
                          {tech}
                        </span>
                      ),
                    )}
                  </div>
                </div>
                <StatusDisplay />
              </div>

              <div className="h-[300px] relative rounded-lg overflow-hidden">
                <Map />
                <div className="absolute inset-0" />
              </div>
            </div>
          </div>

          {/* Tiny Mobile viewport layout */}
          <div className="hidden mobile:block">
            <div className="flex flex-col gap-6">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold mb-4 text-black">
                  Hi, I&apos;m Zach
                </h1>
                <p className="text-base text-black/80 mb-4 leading-relaxed">
                  I&apos;m a developer who loves creating elegant solutions and
                  has a peculiar fascination with geese.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Full-Stack", "AWS Certified", "7+ Years"].map(
                    (tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-black text-[#FFCC00] rounded-full text-sm shadow-sm"
                      >
                        {tech}
                      </span>
                    ),
                  )}
                </div>
                <div className="flex items-center gap-2 text-black/80">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Based in New York</span>
                </div>
              </div>
              <StatusDisplay />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
