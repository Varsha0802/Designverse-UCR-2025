import React from 'react';
import '../index.css';

const TeamSection = () => (
  <section id="team" className="min-h-screen flex flex-col items-center justify-center bg-[#FBEEDA] p-6 rounded-lg shadow-lg">
    <h2
      className="text-3xl font-semibold bg-gradient-to-r from-[#84CFFF] via-[#FD91F5] to-[#FF8E9E] bg-clip-text text-transparent"
    >
      Meet the Team
    </h2>

    {/* Top Row: Varsha & Katja */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Varsha */}
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 bg-[#FBEEDA] overflow-hidden rounded-full flex justify-center items-center">
          <img
            src="/images/varsha.png"
            alt="Varsha"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#84CFFF]">Varsha Shetty</h3>
        <p className="text-center text-[#2C3E50]">MS Information Systems & Technology Student</p>
      </div>

      {/* Katja */}
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 bg-[#FBEEDA] overflow-hidden rounded-full flex justify-center items-center">
          <img
            src="/images/katja.png"
            alt="Katja"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#FD91F5]">Katja Crusius</h3>
        <p className="text-center text-[#2C3E50]">PhD in Information Systems & Technology Student</p>
      </div>
    </div>

    {/* Bottom Row: Joan & Sonia */}
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {/* Joan */}
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 bg-[#FBEEDA] overflow-hidden rounded-full flex justify-center items-center">
          <img
            src="/images/joan.png"
            alt="Joan"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#FF8E9E]">Joan Puteri Zheng</h3>
        <p className="text-center text-[#2C3E50]">PhD in Information Systems & Technology Student</p>
      </div>

      {/* Sonia */}
      <div className="flex flex-col items-center">
        <div className="w-48 h-48 bg-[#FBEEDA] overflow-hidden rounded-full flex justify-center items-center">
          <img
            src="/images/sonia.png"
            alt="Sonia"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[#C096FF]">Sonia Baron</h3>
        <p className="text-center text-[#2C3E50]">PhD in Evaluation & Applied Research Methods Student</p>
      </div>
    </div>

    {/* Education Footer */}
    <div className="mt-10 text-center">
      <p
        className="text-1xl font-semibold text-[#2C3E50]"
        style={{ fontFamily: "'Gasoek One', sans-serif" }}
      >
        Center for Information Systems & Technology
      </p>
      <p
        className="mt-2 text-2xl font-semibold text-[#2C3E50]"
        style={{ fontFamily: "'Gasoek One', sans-serif" }}
      >
        Claremont Graduate University
      </p>
    </div>
  </section>
);

export default TeamSection;

