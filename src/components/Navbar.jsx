import React from 'react';

const Navbar = ({ showChatbot, setShowChatbot }) => (
  <header className="fixed top-0 left-0 w-full h-16 bg-[#FFE5B4]/30 backdrop-blur-md flex justify-between items-center px-8 shadow-md z-50 text-[#2C3E50]">
    {/* Logo image that links to homepage */}
    <a href="/" className="flex items-center space-x-2">
      <img
        src="/images/logo.png" // If it's in the public folder
        alt="TrueNorth Logo"
        className="h-24 w-auto transition-transform duration-300"
      />
      {/* Optional: keep text next to logo */}
      {/* <span className="text-2xl font-semibold">TrueNorth</span> */}
    </a>

    {/* Navigation */}
    {!showChatbot && (
      <nav className="space-x-6 flex items-center">
        <a href="#team" className="text-[#2C3E50] px-6 py-2 rounded-full hover:bg-[#B79DFB] transition">Team</a>
        <a href="#mission" className="text-[#2C3E50] px-6 py-2 rounded-full hover:bg-[#9CDAFA] transition">Mission</a>
        <a href="#perma" className="text-[#2C3E50] px-6 py-2 rounded-full hover:bg-[#F9C7BE] transition">AI Info</a>
        <a href="#contact" className="text-[#2C3E50] px-6 py-2 rounded-full hover:bg-[#F09ED7] transition">Contact</a>
      </nav>
    )}
  </header>
);

export default Navbar;
