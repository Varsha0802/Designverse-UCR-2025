import React from 'react';
import chatIcon from '../assets/chat_8126020.png';

const LandingPage = ({ setShowChatbot }) => {
  return (
<section className="relative h-screen overflow-hidden">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
  >
    <source src="/video/journey.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  <button
    onClick={() => setShowChatbot(true)}
    className="absolute top-[75%] left-1/2 transform -translate-x-1/2 flex items-center space-x-2 bg-white bg-opacity-80 rounded-full px-4 py-2 shadow-lg hover:bg-opacity-100 transition z-10"
  >
    <img src={chatIcon} alt="Chat" className="w-6 h-6" />
    <span className="text-sm font-medium">Let’s Chat</span>
  </button>
</section>
  );
};

export default LandingPage;
