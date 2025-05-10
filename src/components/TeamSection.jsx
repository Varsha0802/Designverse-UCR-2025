import React from 'react';

const TeamSection = () => (
  <section id="team" className="h-screen flex flex-col items-center justify-center bg-[#BAD7DF] p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-[#2C3E50]">Meet the Team</h2>
    <div className="mt-6 grid grid-cols-2 gap-8 max-w-5xl mx-auto">
      {/* Team Member 1 */}
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 rounded-full bg-[#F6F6F6]"></div>
        <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">John Doe</h3>
        <p className="text-center text-[#2C3E50] mt-2">CEO & Founder</p>
        <p className="text-center text-[#2C3E50] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.</p>
      </div>
      {/* Other team members */}
    </div>
  </section>
);

export default TeamSection;
