import React from 'react';

const TeamSection = () => (
  <section id="team" className="h-screen flex flex-col items-center justify-center bg-[#BAD7DF] p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-[#2C3E50]">Meet the Team</h2>
    <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
      {/* Team Member 1 */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-[#F6F6F6]">
          <img
            src="/images/varsha.jpg" // Image for Varsha from public/images
            alt="Varsha"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">Varsha Shetty</h3>
        <p className="text-center text-[#2C3E50]">PhD in Information Systems & Technology Student</p>
      </div>

      {/* Team Member 2 */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-[#F6F6F6]">
          <img
            src="/images/katja.jpg" // Image for Katja from public/images
            alt="Katja"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">Katja Crusius</h3>
        <p className="text-center text-[#2C3E50]">PhD in Information Systems & Technology Student</p>
      </div>

      {/* Team Member 3 */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-[#F6F6F6]">
          <img
            src="/images/tracy.jpg" // Image for Tracy from public/images
            alt="Tracy"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">Tracy Gaolese</h3>
        <p className="text-center text-[#2C3E50]">PhD in Information Systems & Technology Student</p>
      </div>

      {/* Team Member 4 */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-[#F6F6F6]">
          <img
            src="/images/joan.jpg" // Image for Joan from public/images
            alt="Joan"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">Joan Zeng</h3>
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
