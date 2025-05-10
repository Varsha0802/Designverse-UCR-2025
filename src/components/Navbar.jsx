import React from 'react';

const Navbar = ({ showChatbot, setShowChatbot }) => (

  <header className="fixed top-0 left-0 w-full h-16 bg-white/30 backdrop-blur-md flex justify-between items-center px-8 shadow-md z-50 text-[#2C3E50]">
    {/* Logo */}
    <div className="text-2xl font-semibold">TrueNorth</div>

    {/* Navigation */}
    {!showChatbot && (
      <nav className="space-x-6 flex items-center">
        <a href="#team" className="text-[#2C3E50] px-6 py-2 rounded-full hover:bg-[#FDE2E4] transition">Team</a>
        <a href="#mission" className="text-[#2C3E50] px-6 py-2 rounded-full hover:bg-[#99DDCC] transition">Mission</a>
        <a href="#contact" className="text-[#2C3E50] px-6 py-2 rounded-full hover:bg-[#BAD7DF] transition">Contact</a>
      </nav>
    )}
  </header>
);

export default Navbar;
