// src/components/Header.js
import React from "react";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme(); // Access theme context

  return (
    <header
      className={`flex justify-between items-center p-6 fixed w-full z-10 transition-all duration-300 ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
    >
      <h1 className="text-4xl font-extrabold tracking-wider font-sans shadow-md">
        Shogofa Muradi
      </h1>
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#projects"
              className="text-lg hover:underline hover:text-blue-400 transition duration-200"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-lg hover:underline hover:text-blue-400 transition duration-200"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="text-lg hover:underline hover:text-blue-400 transition duration-200"
            >
              Skills
            </a>
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 border rounded-lg text-lg transition duration-300 ${
          darkMode
            ? "border-white text-white hover:bg-gray-800"
            : "border-gray-800 text-gray-800 hover:bg-gray-200"
        }`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
