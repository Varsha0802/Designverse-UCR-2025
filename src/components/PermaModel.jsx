import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ModelInfo = () => (
  <section
    id="contact"
    className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#fbeeda] to-[#BAD7DF] p-10"
  >
    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#84CFFF] via-[#FD91F5] to-[#FF8E9E] bg-clip-text text-transparent mb-8">
      Unlock Wellbeing with Every Conversation
    </h2>

    <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full text-center transform hover:scale-105 transition duration-300">
      <div className="flex flex-col items-center space-y-6 text-[#2C3E50] text-lg">
      <div className="mt-8">
        <div className="flex items-center gap-4 justify-center">

        <div className="flex items-center gap-4 justify-center"></div>
        <img
            src="/images/perma.png"
            alt="Perma+ Model: Positive Emotion, Engagement, Relationships, Meaning, Accomplishment"
            className="w-full h-full object-cover rounded-2xl"></img>
        </div>
          
        <div className="flex items-center gap-4 justify-center mt-4">
            <br></br>
          <p>The PERMA+4 is an organizational psychology model that goes beyond simple support — it helps you thrive. With real-time, personalized insights across nine key well-being domains, TrueNorth helps you build resilience, clarity, and confidence, one thoughtful exchange at a time.</p>
        </div>
      </div>
      </div>
    </div>
  </section>
);

export default ModelInfo;
