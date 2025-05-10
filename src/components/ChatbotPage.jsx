import React from 'react';

const ChatbotPage = ({ messages, userMessage, setUserMessage, handleSendMessage, setShowChatbot }) => (
  <div className="p-6 bg-[#BAD7DF] rounded-lg shadow-xl max-w-2xl mx-auto">
    {/* Back to Home button */}
    <button
      onClick={() => setShowChatbot(false)}
      className="text-[#FEE2E2] underline mb-4"
    >
      ← Home
    </button>

    <h2 className="text-3xl font-bold text-[#2C3E50]">Chat with Us</h2>

    {/* Chat conversation area */}
    <div className="mt-6 p-4 border-2 border-[#E4E8F0] rounded-lg h-80 overflow-y-auto bg-[#FEE2E2]">
      <div className="space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`${message.type === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.type === 'user' ? 'bg-[#99DDCC] text-white' : 'bg-[#F6F6F6] text-[#2C3E50]'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Message input */}
    <div className="mt-4 flex">
      <input
        type="text"
        className="p-2 w-full border-2 border-[#E4E8F0] rounded-lg"
        placeholder="Type your message..."
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />
      <button
        onClick={handleSendMessage}
        className="ml-2 bg-[#BAD7DF] text-white px-6 py-3 rounded-lg hover:bg-[#99DDCC] transition"
      >
        Send
      </button>
    </div>
  </div>
);

export default ChatbotPage;
