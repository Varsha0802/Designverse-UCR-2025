import React from 'react';

const Navbar = ({ showChatbot, setShowChatbot }) => (
  <header className="fixed top-0 left-0 w-full h-16 bg-[#FFE5B4] flex justify-between items-center px-8 shadow-md z-50 text-[#5cb8f6]">
    {/* Logo */}
    <div className="text-2xl font-semibold">TrueNorth</div>

    {/* Navigation */}
    {!showChatbot && (
      <nav className="space-x-6 flex items-center">
        <a
          href="#team"
          className="text-[#5cb8f6] px-6 py-2 rounded-full hover:bg-[#f3ae99] hover:text-[#b74deb] transition"
        >
          Team
        </a>
        <a
          href="#mission"
          className="text-[#5cb8f6] px-6 py-2 rounded-full hover:bg-[#f3ae99] hover:text-[#b74deb] transition"
        >
          Mission
        </a>
        <a
          href="#contact"
          className="text-[#5cb8f6] px-6 py-2 rounded-full hover:bg-[#f3ae99] hover:text-[#b74deb] transition"
        >
          Contact
        </a>
      </nav>
    )}
  </header>
);

export default Navbar;
