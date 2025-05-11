import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineData = [
  {
    title: "Feeling stuck at work?",
    text: "TrueNorth helps you identify your strengths and align them with your career path so you can move forward with confidence.",
    color: "#F5A623",
  },
  {
    title: "Not feeling engaged in your role?",
    text: "We help you rediscover what drives you — and build strategies that reignite your purpose and motivation.",
    color: "#84CFFF",
  },
  {
    title: "Struggling to find meaning in your tasks?",
    text: "TrueNorth guides you to connect your daily work to your personal values, so even small wins feel significant.",
    color: "#FD91F5",
  },
  {
    title: "Disconnected from your team or organization?",
    text: "We help you rebuild genuine connections and improve collaboration — without compromising your authenticity.",
    color: "#FF8E9E",
  },
  {
    title: "Accomplishments going unnoticed?",
    text: "With TrueNorth, you’ll learn how to track, share, and celebrate your wins, so your progress is recognized and rewarding.",
    color: "#2C3E50",
  },
  {
    title: "Feeling overwhelmed or burned out?",
    text: "TrueNorth provides tools to help you manage stress, set boundaries, and thrive sustainably in your career.",
    color: "#c096ff",
  },
];

const MissionSection = () => {
  return (
    <section
      id="mission"
      className="relative min-h-screen flex flex-col items-center justify-start bg-[#FEE2E2] px-6 pt-16 pb-24"
    >
      <h2 className="text-4xl font-bold text-[#2C3E50] mb-16">Our Mission</h2>

      <div className="relative flex">
        {/* Vertical Gradient Bar */}
        <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-[#F5A623] via-[#84CFFF] via-[#FD91F5] via-[#FF8E9E] to-[#2C3E50] z-0" />

        <div className="ml-16 space-y-32 w-full max-w-4xl">
          {timelineData.map((item, index) => {
            const controls = useAnimation();
            const [ref, inView] = useInView({ triggerOnce: true });

            useEffect(() => {
              if (inView) {
                controls.start("visible");
              }
            }, [controls, inView]);

            return (
              <motion.div
                ref={ref}
                key={index}
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative z-10 group"
              >
                {/* Bullet */}
                <div
                  className="absolute left-[-3.2rem] top-2 w-5 h-5 rounded-full border-4 border-white z-20"
                  style={{ backgroundColor: item.color }}
                ></div>

                {/* Content Box */}
                <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300 group-hover:scale-[1.02] group-hover:bg-opacity-90">
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[#2C3E50] text-lg">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
