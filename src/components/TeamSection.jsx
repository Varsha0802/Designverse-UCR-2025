import React from 'react';
import '../index.css'; // Ensure your CSS is correctly imported

const TeamSection = () => (
  <section id="team" className="min-h-screen flex flex-col items-center justify-center bg-[#BAD7DF] p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-[#2C3E50]">Meet the Team</h2>
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Varsha */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 bg-[#F6F6F6] rounded-lg overflow-hidden flex justify-center items-center">
          <img
            src="/images/varsha.png" // Ensure correct path to image
            alt="Varsha"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">Varsha Shetty</h3>
        <p className="text-center text-[#2C3E50]">MS Information Systems & Technology Student</p>
      </div>

      {/* Katja */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 bg-[#F6F6F6] rounded-lg overflow-hidden flex justify-center items-center">
          <img
            src="/images/katja.png" // Ensure correct path to image
            alt="Katja"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">Katja Crusius</h3>
        <p className="text-center text-[#2C3E50]">PhD in Information Systems & Technology Student</p>
      </div>

      {/* Tracy */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 bg-[#F6F6F6] rounded-lg overflow-hidden flex justify-center items-center">
          <img
            src="/images/tracy.png" // Ensure correct path to image
            alt="Tracy"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">Tracy Gaolese</h3>
        <p className="text-center text-[#2C3E50]">PhD in Information Systems & Technology Student</p>
      </div>
    </div>

    {/* Centered text for education */}
    <div className="mt-8 text-center text-[#2C3E50]">
      <p className="text-xl font-semibold">Center for Information Systems & Technology</p>
      <p className="mt-2 text-xl font-semibold">Claremont Graduate University</p>
    </div>
  </section>
);

export default TeamSection;
