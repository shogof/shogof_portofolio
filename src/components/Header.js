// src/components/Header.js
import React from "react";
import { useTheme } from "../ThemeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <header
      className={`flex justify-between items-center p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <h1 className="text-2xl font-bold">Shogofa Muradi</h1>{" "}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#projects" className="hover:underline">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:underline">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:underline">
              Contact
            </a>{" "}
          </li>
        </ul>
      </nav>
      <button
        onClick={toggleDarkMode}
        className={`px-4 py-2 border rounded ${
          darkMode ? "border-white text-white" : "border-gray-800 text-gray-800"
        }`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
