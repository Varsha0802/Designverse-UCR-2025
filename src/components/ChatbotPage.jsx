import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import DOMPurify from 'dompurify';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const ChatbotPage = ({ setShowChatbot }) => {
  const [messages, setMessages] = useState([]); // Ensure messages is initialized as an array
  const [userMessage, setUserMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const bottomRef = useRef(null);

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  // Fetch last 5 interactions from MongoDB
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/chat/last5'); // Use full URL
        if (Array.isArray(response.data)) {
          setMessages(response.data);
        } else {
          console.error('Unexpected response format:', response.data);
          setMessages([]); // Fallback to an empty array
        }
      } catch (error) {
        console.error('Error fetching messages:', error);
        setMessages([]); // Fallback to an empty array
      }
    };
  
    fetchMessages();
  }, []);
  
    const handleSendMessage = async () => {
      if (userMessage.trim() === '') return;
    
      const newMessage = { text: userMessage, type: 'user' };
      setMessages((prev) => [...prev, newMessage]);
      setUserMessage('');
      setIsLoading(true);
    
      try {
        const permaPrompt = `
        You are a chatbot named TrueNorth designed to enhance work-related well-being and performance using the PERMA+4 framework. Use emojis and a friendly tone to engage users. Your goal is to provide positive, meaningful, and actionable responses that promote well-being in the workplace. Please keep the response concise and humanlike. 
        Respond to the following user input with a focus on:
        - Positive Emotion
        - Engagement
        - Relationships
        - Meaning
        - Accomplishment
        - Physical Health
        - Mindset
        - Environment
        - Economic Security

        User Input: "${userMessage}"
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: permaPrompt,
        config: {
          maxOutputTokens: 800,
          temperature: 0.7,
        },
      });
  
      const botMessage = response.text || 'Sorry, I could not process your request.';
      setMessages((prev) => [...prev, { text: botMessage, type: 'bot' }]);
  
      // Save interaction to MongoDB
      await axios.post('http://localhost:5000/api/chat', {
        userMessage,
        botMessage,
      });
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages((prev) => [
        ...prev,
        // { text: 'An error occurred. Please try again later.', type: 'bot' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDE2E2] via-[#FFF8E7] to-[#E0F7FA] flex flex-col">
      {/* Navbar */}
      <header className="bg-white/80 shadow-sm backdrop-blur-md fixed top-0 w-full z-10 px-6 py-4 flex items-center justify-between">
        <h1
          className="text-2xl font-bold text-[#2C3E50] cursor-pointer"
          onClick={() => setShowChatbot(false)}
        >
          TrueNorth
        </h1>
      </header>

      {/* Spacer for navbar */}
      <div className="h-20"></div>

      {/* Chat Content */}
      <div className="flex-1 flex flex-col items-center px-4 overflow-y-auto">
        <div className="w-full max-w-3xl flex flex-col justify-between space-y-4 py-4">
          {Array.isArray(messages) && messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`text-sm p-4 shadow-md ${
                  msg.type === 'user' ? 'bg-white/70' : 'bg-[#D9B9FD]'
                } text-[#2C3E50] max-w-xl rounded-md whitespace-pre-line`}
              >
                {msg.type === 'bot' ? (
                  <ReactMarkdown>{DOMPurify.sanitize(msg.text)}</ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="text-sm p-4 bg-white/70 shadow text-[#2C3E50] max-w-xl rounded-md">
              TrueNorth is thinking...
            </div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-3xl mx-auto px-4 pb-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex space-x-2"
        >
          <input
            type="text"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
            className="flex-1 rounded-lg p-3 border border-gray-300 bg-white/70 text-gray-700 placeholder:text-gray-500 focus:outline-none"
            placeholder="Type your message..."
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#BAD7DF] hover:bg-[#99DDCC] text-white px-4 py-2 rounded-lg"
          >
            {isLoading ? '...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatbotPage;