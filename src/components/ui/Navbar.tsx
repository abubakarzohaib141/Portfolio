"use client";
import React, { useState } from 'react';
import { ModeToggle } from './ModeToggle';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="fixed w-full z-10 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-3xl font-black ">
              AbuBakar
            </a>
          </div>
          <div className="hidden md:flex space-x-4 items-center">
            <a href="/" className="text-xl font-semibold  nav">
              Home
            </a>
            <a href="/" className="text-xl font-semibold  nav">
              About
            </a>
            <a href="/" className="text-xl font-semibold  nav">
              Work
            </a>
            <a href="/" className="text-xl font-semibold  nav">
              Contact
            </a>
            <a
              href="/hire-me"
              className="text-xl font-semibold  bg-blue-500 hover:bg-blue-600 transition-colors duration-300 py-2 px-4 rounded-lg shadow-lg"
            >
              Hire Me
            </a>
            <ModeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-3xl font-black text-white focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <ul className="space-y-4 px-4 pt-4 pb-6">
            <li>
              <a href="/" className="text-xl font-semibold text-white nav block">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="text-xl font-semibold text-white nav block">
                About
              </a>
            </li>
            <li>
              <a href="/" className="text-xl font-semibold text-white nav block">
                Work
              </a>
            </li>
            <li>
              <a href="/" className="text-xl font-semibold text-white nav block">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-xl font-semibold text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 py-2 px-4 rounded-lg shadow-lg block text-center"
              >
                Hire Me
              </a>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Navbar;
