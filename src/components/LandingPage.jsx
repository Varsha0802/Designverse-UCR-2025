import React from 'react';

const LandingPage = () => (
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

  </section>
);

export default LandingPage;
