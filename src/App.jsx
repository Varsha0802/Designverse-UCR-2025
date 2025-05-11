import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ChatbotPage from './components/ChatbotPage';
import TeamSection from './components/TeamSection';
import MissionSection from './components/MissionSection';
import ContactSection from './components/ContactSection';
import LoadingScreen from './components/LoadingScreen';
import ModelInfo from './components/PermaModel';

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // ✅ Loading effect moved to proper location
  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 3000); // show loading for 4s
    return () => clearTimeout(timeout);
  }, []);

  // ✅ Show loader while loading
  if (isLoading) return <LoadingScreen />;

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
      <Navbar showChatbot={showChatbot} setShowChatbot={setShowChatbot} />
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
            <ModelInfo />
            <ContactSection />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
