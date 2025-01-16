// src/components/Header.js
import React from "react";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header
      className={`fixed w-full top-0 left-0 flex justify-between items-center p-4 z-10 transition-all duration-300 ${
        darkMode
          ? "text-white bg-black bg-opacity-30 shadow-lg"
          : "text-gray-800 bg-white bg-opacity-70 shadow-lg"
      }`}
    >
      {/* Navigation Menu */}
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#projects"
              className="text-lg font-semibold hover:text-sky-600 transition duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-lg font-semibold hover:text-sky-600 transition duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg font-semibold hover:text-sky-600 transition duration-200"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 border rounded-lg text-lg font-semibold transition duration-300 ${
          darkMode
            ? "border-white text-white hover:bg-sky-500 hover:text-gray-900"
            : "border-gray-800 text-gray-800 hover:bg-sky-500 hover:text-white"
        }`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
