import React, { useState } from 'react';

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  // Function to simulate chatbot response
  const handleSendMessage = () => {
    if (userMessage.trim() === '') return; // Do nothing if input is empty

    // Add the user message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { type: 'user', text: userMessage },
    ]);

    // Simulate chatbot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'chatbot', text: 'This is a chatbot response.' },
      ]);
    }, 1000);

    // Clear the input field after sending
    setUserMessage('');
  };

  return (
    <div className="font-poppins min-h-screen bg-[#BAD7DF] text-black">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full h-16 bg-white flex justify-between items-center px-8 shadow-md z-50">
        {/* Logo */}
        <div className="text-xl font-bold">LOGO</div>

        {/* Navigation */}
        {!showChatbot && (
          <nav className="space-x-6">
            <a href="#team" className="text-gray-800 hover:text-blue-500">Team</a>
            <a href="#mission" className="text-gray-800 hover:text-blue-500">Mission</a>
            <a href="#contact" className="text-gray-800 hover:text-blue-500">Contact</a>
          </nav>
        )}
      </header>

      {/* Page Content with offset for navbar */}
      <div className="pt-16">
        {showChatbot ? (
          // Chatbot Page
          <div className="p-6">
            {/* Back to Home button */}
            <button
              onClick={() => setShowChatbot(false)}
              className="text-blue-600 underline"
            >
              ← Home
            </button>

            <h2 className="text-3xl mt-4 font-bold">Chat with Us</h2>

            {/* Chat conversation area */}
            <div className="mt-6 p-4 border-2 border-gray-300 rounded-lg h-80 overflow-y-auto bg-white">
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`${
                      message.type === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block p-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-300 text-black'
                      }`}
                    >
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
                className="p-2 w-full border-2 border-gray-300 rounded-lg"
                placeholder="Type your message..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
              />
              <button
                onClick={handleSendMessage}
                className="ml-2 bg-blue-600 text-white px-6 py-3 rounded-lg"
              >
                Send
              </button>
            </div>
          </div>
        ) : (
          // Landing Page
          <section className="h-screen flex items-center justify-center bg-white flex-col">
            <h1 className="text-4xl font-semibold text-center">
              Hi, Let AI manage your emotions
            </h1>
            <button
              onClick={() => setShowChatbot(true)}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Let’s Chat
            </button>
          </section>
        )}

        {/* New Sections - Only show if not on Chatbot Page */}
        {!showChatbot && (
          <>
            <section id="team" className="h-screen flex items-center justify-center bg-gray-100">
              <h2 className="text-4xl font-semibold">Team Section</h2>
            </section>

            <section id="mission" className="h-screen flex items-center justify-center bg-blue-100">
              <h2 className="text-4xl font-semibold">Mission Section</h2>
            </section>

            <section id="contact" className="h-screen flex items-center justify-center bg-red-100">
              <h2 className="text-4xl font-semibold">Contact Section</h2>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default App;

