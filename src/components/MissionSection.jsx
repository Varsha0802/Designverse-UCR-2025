import React, { useState, useEffect } from 'react';

const MissionSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Set maximum scroll position for progress tracking
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

  // Calculate progress based on scroll position
  const progress = (scrollPosition / maxScroll) * 100;

  return (
    <section
      id="mission"
      className="relative min-h-screen flex flex-col items-center justify-start bg-[#FEE2E2] p-6 rounded-lg shadow-lg"
    >
      {/* Title */}
      <h2 className="text-3xl font-semibold text-[#2C3E50]">Our Mission</h2>

      <div className="text-center mt-6 text-[#2C3E50]">
        <p className="mb-4">
          At TrueNorth, we are committed to empowering underrepresented individuals in companies, helping them rise professionally while staying true to their authentic selves.
        </p>
      </div>

      {/* Timeline and Progress Bar */}
      <div className="relative mt-8 flex flex-col items-center w-full">
        {/* Left-hand progress bar */}
        <div
          className="absolute left-0 top-0 h-full w-[6px] bg-gradient-to-t from-[#84CFFF] via-[#FD91F5] to-[#FF8E9E] rounded-full z-0"
          style={{
            height: `${progress}%`,
            transition: 'all 0.3s ease',
          }}
        />

        {/* Timeline Points */}
        <div className="flex flex-col space-y-24 mt-16">
          <div className="relative flex items-center">
            <div className="absolute w-6 h-6 bg-[#F5A623] rounded-full left-0 -translate-x-1/2 z-10"></div>
            <div className="ml-12">
              <h3 className="text-xl font-semibold text-[#F5A623]">Feeling stuck at work?</h3>
              <p className="mt-2 text-lg text-[#2C3E50]">
                TrueNorth helps you identify your strengths and align them with your career path so you can move forward with confidence.
              </p>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="absolute w-6 h-6 bg-[#84CFFF] rounded-full left-0 -translate-x-1/2 z-10"></div>
            <div className="ml-12">
              <h3 className="text-xl font-semibold text-[#84CFFF]">Not feeling engaged in your role?</h3>
              <p className="mt-2 text-lg text-[#2C3E50]">
                We help you rediscover what drives you — and build strategies that reignite your purpose and motivation.
              </p>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="absolute w-6 h-6 bg-[#FD91F5] rounded-full left-0 -translate-x-1/2 z-10"></div>
            <div className="ml-12">
              <h3 className="text-xl font-semibold text-[#FD91F5]">Struggling to find meaning in your tasks?</h3>
              <p className="mt-2 text-lg text-[#2C3E50]">
                TrueNorth guides you to connect your daily work to your personal values, so even small wins feel significant.
              </p>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="absolute w-6 h-6 bg-[#FF8E9E] rounded-full left-0 -translate-x-1/2 z-10"></div>
            <div className="ml-12">
              <h3 className="text-xl font-semibold text-[#FF8E9E]">Disconnected from your team or organization?</h3>
              <p className="mt-2 text-lg text-[#2C3E50]">
                We help you rebuild genuine connections and improve collaboration — without compromising your authenticity.
              </p>
            </div>
          </div>

          <div className="relative flex items-center">
            <div className="absolute w-6 h-6 bg-[#2C3E50] rounded-full left-0 -translate-x-1/2 z-10"></div>
            <div className="ml-12">
              <h3 className="text-xl font-semibold text-[#2C3E50]">Accomplishments going unnoticed?</h3>
              <p className="mt-2 text-lg text-[#2C3E50]">
                With TrueNorth, you’ll learn how to track, share, and celebrate your wins, so your progress is recognized and rewarding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
