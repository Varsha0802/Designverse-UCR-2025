import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ChatbotPage from './components/ChatbotPage';
import TeamSection from './components/TeamSection';
import MissionSection from './components/MissionSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;

    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'user', text: userMessage },
    ]);

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'chatbot', text: 'This is a chatbot response.' },
      ]);
    }, 1000);

    setUserMessage('');
  };

  return (
    <div className="font-poppins min-h-screen text-black">
      <Navbar showChatbot={showChatbot} />
      <div className="pt-16">
        {showChatbot ? (
          <ChatbotPage
            messages={messages}
            userMessage={userMessage}
            setUserMessage={setUserMessage}
            setMessages={setMessages}
            setShowChatbot={setShowChatbot}
          />
        ) : (
          <>
            <LandingPage setShowChatbot={setShowChatbot} />
            <TeamSection />
            <MissionSection />
            <ContactSection />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
