import React from 'react';

const ContactSection = () => (
  <section id="contact" className="h-screen flex flex-col items-center justify-center bg-[#F6F6F6] p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl font-semibold text-[#2C3E50]">Contact Us</h2>
    <div className="mt-6 text-center text-[#2C3E50]">
      <p>Email: info@truenorth.com</p>
      <p>Phone: (123) 456-7890</p>
      <p>Address: 123 TrueNorth St, City, Country</p>
    </div>
  </section>
);

export default ContactSection;
