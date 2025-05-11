import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';


const ChatbotPage = ({ messages, userMessage, setUserMessage, setMessages, setShowChatbot }) => {
  const [isLoading, setIsLoading] = useState(false);

  // Initialize Gemini API
  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

  const handleSendMessage = async () => {
    if (userMessage.trim() === '') return;
  
    // Add user message to the chat
    const newMessage = { text: userMessage, type: 'user' };
    setMessages((prev) => [...prev, newMessage]);
    setUserMessage('');
  
    // Show loading indicator
    setIsLoading(true);
  
    try {
      // Define a PERMA+4-focused prompt
      const permaPrompt = `
        You are a chatbot named TrueNorth designed to enhance work-related well-being and performance using the PERMA+4 framework.
        Respond to the following user input with a focus on:
        - Positive Emotion: Encourage optimism and positivity.
        - Engagement: Foster deep involvement and flow.
        - Relationships: Promote collaboration and connection.
        - Meaning: Highlight purpose and significance.
        - Accomplishment: Encourage goal-setting and achievement.
        - Physical Health: Suggest healthy habits.
        - Mindset: Encourage a growth mindset.
        - Environment: Promote a supportive and productive environment.
        - Economic Security: Provide advice on financial stability if relevant.
  
        User Input: "${userMessage}"
      `;
  
      // Generate response using Gemini API
      const response = await ai.models.generateContent({
        model: 'gemini-2.0-flash', // Replace with an available model if needed
        contents: permaPrompt,
        config: {
          maxOutputTokens: 200,
          temperature: 0.7,
        },
      });
  
      // Add bot response to the chat
      if (response.text) {
        setMessages((prev) => [...prev, { text: response.text, type: 'bot' }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { text: 'Sorry, I could not process your request.', type: 'bot' },
        ]);
      }
    } catch (error) {
      console.error('Error generating response:', error);
      setMessages((prev) => [
        ...prev,
        { text: 'An error occurred. Please try again later.', type: 'bot' },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <video
          src="/videos/chatbot.mp4" // Update with your actual video file path
          type="video/mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </div>

      {/* Chatbot UI Container */}
      <div className="relative z-10 p-6 max-w-2xl mx-auto bg-white bg-opacity-80 rounded-lg shadow-xl">
        {/* Back to Home button */}
        <button
          onClick={() => setShowChatbot(false)}
          className="text-[#FEE2E2] underline mb-4"
        >
          ← Home
        </button>

        <h2 className="text-3xl font-bold text-[#2C3E50] mb-4">Chat with Us</h2>

        {/* Chat conversation area */}
        <div className="mt-6 p-4 border-2 border-[#E4E8F0] rounded-lg h-80 overflow-y-auto bg-[#FEE2E2] space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`inline-block p-3 rounded-lg max-w-xs ${
                  message.type === 'user'
                    ? 'bg-[#99DDCC] text-white'
                    : 'bg-[#F6F6F6] text-[#2C3E50]'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="inline-block p-3 rounded-lg max-w-xs bg-[#F6F6F6] text-[#2C3E50]">
                Typing...
              </div>
            </div>
          )}
        </div>

        {/* Message input */}
        <div className="mt-4 flex">
          <input
            type="text"
            className="p-3 w-full border-2 border-[#E4E8F0] rounded-lg"
            placeholder="Type your message..."
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 bg-[#BAD7DF] text-white px-6 py-3 rounded-lg hover:bg-[#99DDCC] transition"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotPage;