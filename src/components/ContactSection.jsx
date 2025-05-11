import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => (
  <section
    id="contact"
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#fbeeda] to-[#BAD7DF] p-10"
  >
    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#84CFFF] via-[#FD91F5] to-[#FF8E9E] bg-clip-text text-transparent mb-8">
      Get in Touch
    </h2>

    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center transform hover:scale-105 transition duration-300">
      <div className="flex flex-col items-center space-y-6 text-[#2C3E50] text-lg">
        {/* Varsha */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-[#FD91F5]" />
          <p className="cursor-pointer select-all hover:text-[#b74deb] transition">
            varsha.shetty@cgu.edu
          </p>
        </div>

        {/* Katja */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-[#FD91F5]" />
          <p className="cursor-pointer select-all hover:text-[#b74deb] transition">
            katja.crusius@cgu.edu
          </p>
        </div>

        {/* Joan */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-[#FD91F5]" />
          <p className="cursor-pointer select-all hover:text-[#b74deb] transition">
            joan.zheng@cgu.edu
          </p>
        </div>

        {/* Sonia */}
        <div className="flex items-center gap-4">
          <FaEnvelope className="text-[#FD91F5]" />
          <p className="cursor-pointer select-all hover:text-[#b74deb] transition">
            sonia.baron@cgu.edu
          </p>
        </div>
      </div>

      {/* LinkedIn Buttons */}
      <div className="mt-6">
        {/* Varsha */}
        <a
          href="https://www.linkedin.com/in/varshashetty08/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-[#FD91F5] text-white rounded-full hover:bg-[#b74deb] transition mb-4"
        >
          <FaPaperPlane />
          Connect with Varsha on LinkedIn
        </a>

        {/* Katja */}
        <a
          href="https://www.linkedin.com/in/katjacrusius/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-[#FD91F5] text-white rounded-full hover:bg-[#b74deb] transition mb-4"
        >
          <FaPaperPlane />
          Connect with Katja on LinkedIn
        </a>

        {/* Joan */}
        <a
          href="https://www.linkedin.com/in/joanpz/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-2 bg-[#FD91F5] text-white rounded-full hover:bg-[#b74deb] transition"
        >
          <FaPaperPlane />
          Connect with Joan on LinkedIn
        </a>
      </div>

      {/* Shared Contact Info */}
      <div className="mt-8">
        <div className="flex items-center gap-4 justify-center">
          <FaPhone className="text-[#84CFFF]" />
          <p>(605) 475-6961</p>
        </div>
        <div className="flex items-center gap-4 justify-center mt-4">
          <FaMapMarkerAlt className="text-[#FF8E9E]" />
          <p>150 E 10th St, Claremont, CA 91711</p>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
