import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Incidents', path: '/Incidents' },
    { name: 'Locations', path: '/Locations' },
    { name: 'Activities', path: '/Activities' },
    { name: 'Documents', path: '/Documents' },
    { name: 'Cypher AI', path: '/Cypher-AI' },
  ];

  return (
    <nav className="flex items-center justify-between bg-white shadow px-6 py-4 lg:px-12">

      <div className="flex items-center justify-between w-full lg:w-auto">
        <img src="/images/logo.svg" alt="Logo" className="h-10" />

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <ul
        className={`lg:flex space-x-8 text-gray-700 font-medium ${
          isMenuOpen ? 'block' : 'hidden'
        } absolute lg:static top-16 left-0 w-full bg-white lg:w-auto lg:space-y-0 space-y-4 lg:block shadow lg:shadow-none`}
      >
        {navItems.map((item) => (
          <li key={item.path} className="text-center lg:text-left">
            <Link
              to={item.path}
              className={`block hover:text-gray-600 pb-2 ${
                location.pathname === item.path
                  ? 'border-b-4 rounded border-[#09090B]'
                  : 'border-b-4 border-transparent'
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex items-center space-x-4 lg:hidden">
        <img src="/images/notify.svg" alt="Notifications" className="w-8 h-8" />
        <img src="/images/profile.svg" alt="Profile" className="w-8 h-8" />
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        <img src="/images/notify.svg" alt="Notifications" className="w-8 h-8" />
        <img src="/images/profile.svg" alt="Profile" className="w-8 h-8" />

        <div>
          <p className="text-[#71717A] font-semibold">Usman Zafar</p>
          <p className="text-[#71717A] text-sm">usmanzafar@gmail.com</p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
