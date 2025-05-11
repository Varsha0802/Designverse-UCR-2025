// src/components/ChatContainer.jsx
import React, { useState } from 'react';
import ChatbotPage from './ChatbotPage';

const ChatContainer = () => {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');
  const [showChatbot, setShowChatbot] = useState(true);

  const handleSendMessage = () => {
    if (userMessage.trim() === '') return;

    const newMessage = { text: userMessage, type: 'user' };
    setMessages((prev) => [...prev, newMessage]);
    setUserMessage('');
    
    // Simulated bot response
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Thanks for your message!", type: 'bot' }]);
    }, 500);
  };

  return showChatbot ? (
    <ChatbotPage
      messages={messages}
      userMessage={userMessage}
      setUserMessage={setUserMessage}
      handleSendMessage={handleSendMessage}
      setShowChatbot={setShowChatbot}
    />
  ) : (
    <div className="text-center mt-10">
      <h1 className="text-xl">You exited the chatbot.</h1>
    </div>
  );
};

export default ChatContainer;
