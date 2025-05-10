import React from 'react';

const App = () => {
  return (

    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full h-16 bg-white flex justify-between items-center px-8 shadow-md z-50">
        {/* Logo */}
        <div className="text-xl font-bold">LOGO</div>


        {/* Navigation */}
        <nav className="space-x-6">
          <a href="#team" className="text-gray-800 hover:text-blue-500">Team</a>
          <a href="#mission" className="text-gray-800 hover:text-blue-500">Mission</a>
          <a href="#contact" className="text-gray-800 hover:text-blue-500">Contact</a>
        </nav>
      </header>

      {/* Page Content with offset for navbar */}
      <div className="pt-16">
        {/* Your original content */}
        <section className="h-screen flex items-center justify-center bg-white">
          <h1 className="text-4xl font-semibold">Hi, Let AI manage your emotions</h1>
        </section>

        {/* New Sections */}
        <section id="team" className="h-screen flex items-center justify-center bg-gray-100">
          <h2 className="text-4xl font-semibold">Team Section</h2>
        </section>

        <section id="mission" className="h-screen flex items-center justify-center bg-blue-100">
          <h2 className="text-4xl font-semibold">Mission Section</h2>
        </section>

        <section id="contact" className="h-screen flex items-center justify-center bg-red-100">
          <h2 className="text-4xl font-semibold">Contact Section</h2>
        </section>
      </div>
    </>
  );
};

export default App;
