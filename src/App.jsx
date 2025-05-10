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
    <div className="font-poppins min-h-screen text-black">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full h-16 bg-[#BAD7DF] flex justify-between items-center px-8 shadow-md z-50 text-[#2C3E50]">
        {/* Logo */}
        <div className="text-2xl font-semibold">TrueNorth</div>

        {/* Navigation */}
        {!showChatbot && (
          <nav className="space-x-6 flex items-center">
            <a href="#team" className="text-[#2C3E50] px-6 py-2 rounded-full hover:bg-[#99DDCC] transition">
              Team
            </a>
            <a href="#mission" className="text-[#2C3E50] px-6 py-2 rounded-full hover:bg-[#99DDCC] transition">
              Mission
            </a>
            <a href="#contact" className="text-[#2C3E50] px-6 py-2 rounded-full hover:bg-[#99DDCC] transition">
              Contact
            </a>
          </nav>
        )}
      </header>

      {/* Page Content with offset for navbar */}
      <div className="pt-16">
        {showChatbot ? (
          // Chatbot Page
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
                  <div
                    key={index}
                    className={`${
                      message.type === 'user' ? 'text-right' : 'text-left'
                    }`}
                  >
                    <div
                      className={`inline-block p-2 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-[#99DDCC] text-white'
                          : 'bg-[#F6F6F6] text-[#2C3E50]'
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
        ) : (
          // Landing Page
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
        )}

        {/* New Sections - Only show if not on Chatbot Page */}
        {!showChatbot && (
          <>
            <section
              id="team"
              className="h-screen flex flex-col items-center justify-center bg-[#BAD7DF] p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold text-[#2C3E50]">Meet the Team</h2>
              <div className="mt-6 grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Team Member 1 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-[#F6F6F6]"></div>
                  <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">John Doe</h3>
                  <p className="text-center text-[#2C3E50] mt-2">CEO & Founder</p>
                  <p className="text-center text-[#2C3E50] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  </p>
                </div>
                {/* Team Member 2 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-[#F6F6F6]"></div>
                  <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">Jane Smith</h3>
                  <p className="text-center text-[#2C3E50] mt-2">COO</p>
                  <p className="text-center text-[#2C3E50] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  </p>
                </div>
                {/* Team Member 3 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-[#F6F6F6]"></div>
                  <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">Alice Johnson</h3>
                  <p className="text-center text-[#2C3E50] mt-2">Lead Developer</p>
                  <p className="text-center text-[#2C3E50] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  </p>
                </div>
                {/* Team Member 4 */}
                <div className="flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full bg-[#F6F6F6]"></div>
                  <h3 className="mt-4 text-xl font-semibold text-[#2C3E50]">David Lee</h3>
                  <p className="text-center text-[#2C3E50] mt-2">Product Manager</p>
                  <p className="text-center text-[#2C3E50] mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="mission"
              className="h-screen flex flex-col items-center justify-center bg-[#FEE2E2] p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold text-[#2C3E50]">Our Mission</h2>
              <div className="text-center mt-6 text-[#2C3E50]">
                <p className="mb-4">
                  At TrueNorth, we are dedicated to helping underrepresented individuals in companies rise
                  professionally while staying true to their authentic selves. We guide individuals to understand
                  their strengths, values, and help them navigate challenges in a professional world that often doesn’t
                  understand their unique perspective.
                </p>
                <p className="mb-4">
                  Our mission is to empower underrepresented professionals by offering them the tools, guidance, and
                  community to succeed in the corporate world without compromising their values.
                </p>
                <p className="mb-4">
                  With a strong focus on mentorship, leadership development, and a network of like-minded individuals, TrueNorth
                </p>
              </div>
            </section>

            <section
              id="contact"
              className="h-screen flex flex-col items-center justify-center bg-[#F6F6F6] p-6 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-semibold text-[#2C3E50]">Contact Us</h2>
              <div className="mt-6 text-center text-[#2C3E50]">
                <p>Email: info@truenorth.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 TrueNorth St, City, Country</p>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
