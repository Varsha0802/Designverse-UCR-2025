import React from 'react';

const PerformanceSection = () => (
  <section
    id="performance"
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#DFFFE2] to-[#E2F7FF] px-4 pt-12 pb-16"
  >
    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#527141] via-[#77a361] to-[#527141] bg-clip-text text-transparent mb-8">
        Performance Evaluation
    </h2>

    {/* Cards Container */}
    <div className="flex flex-row gap-6 justify-center items-center w-full max-w-7xl">
      {/* Card 1 */}
      <div className="bg-white shadow-xl rounded-2xl p-1 w-[50%] text-center transform hover:scale-105 transition duration-300">
        <div className="flex flex-col items-center space-y-6 text-[#2C3E50] text-lg">
          <img
            src="/images/EvalUse.png"
            alt="Evaluation for Usefulness"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-xl rounded-2xl p-1 w-[50%] text-center transform hover:scale-105 transition duration-300">
        <div className="flex flex-col items-center space-y-6 text-[#2C3E50] text-lg">
          <img
            src="/images/EvalGoal.png"
            alt="Evaluation for Goal Facilitation"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default PerformanceSection;