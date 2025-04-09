"use client"
import { useState } from 'react';

export const Header = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const handleNavClick = (link: string) => {
    setActiveLink(link);
  };

  return(
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a 
          href="#"
          className={`nav-item ${activeLink === 'Home' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
          onClick={() => handleNavClick('Home')}
        >Home</a>

        <a 
          href="#projects"
          className={`nav-item ${activeLink === 'Projects' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
          onClick={() => handleNavClick('Projects')}
        >Projects</a>

        <a 
          href="#about"
          className={`nav-item ${activeLink === 'About' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
          onClick={() => handleNavClick('About')}
        >About</a>

        <a 
          href="#contact"
          className={`nav-item ${activeLink === 'Contact' ? 'bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900' : ''}`}
          onClick={() => handleNavClick('Contact')}
        >Contact</a>
      </nav>
    </div>
  );
};
