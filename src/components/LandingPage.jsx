import React from 'react';

const LandingPage = ({ setShowChatbot }) => (
  <section className="h-screen flex items-center justify-center bg-[#E0F3F3] flex-col">
    <h1 className="text-4xl font-semibold text-center text-[#2C3E50]">
      Hi, Let AI manage your emotions
    </h1>
    <button
      onClick={() => setShowChatbot(true)}
      className="mt-6 bg-[#8EC1D3] text-[#2C3E50] px-8 py-4 rounded-full hover:bg-[#99DDCC] transition"
    >
      Let’s Chat
    </button>
  </section>
);

export default LandingPage;
