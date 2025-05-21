import React from 'react';

const Navbar = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-2 flex justify-between items-center'>
        <div className='text-2xl font-bold hidden md:inline'>VISHAL</div>
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#projects" className='hover:text-gray-400'>My Projects</a>
          <a href="#experience" className='hover:text-gray-400'>Experience</a>
          <a href="#skills" className='hover:text-gray-400'>Skills</a>
          <a href="#education" className='hover:text-gray-400'>Education</a>
        </div>
        <button
          onClick={scrollToContact}
          className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

