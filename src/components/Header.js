import React, { useState } from "react";
import { useTheme } from "../ThemeContext";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 flex justify-between items-center p-4 z-10 transition-all duration-300 ${
        darkMode
          ? "text-white bg-black bg-opacity-30 shadow-lg"
          : "text-gray-800 bg-white bg-opacity-70 shadow-lg"
      }`}
    >
      {/* Mobile Hamburger Menu */}
      <div className="flex md:hidden">
        <button onClick={handleMenuToggle} className="text-2xl font-semibold">
          {menuOpen ? (
            <FaTimes className={darkMode ? "text-white" : "text-black"} />
          ) : (
            <FaBars className={darkMode ? "text-white" : "text-black"} />
          )}
        </button>
      </div>

      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex absolute md:relative top-0 left-0 w-full md:space-x-8 bg-black md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none transition-all duration-300 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <div className="absolute top-4 right-4 md:hidden">
          <button
            onClick={handleMenuToggle}
            className={`text-2xl ${darkMode ? "text-white" : "text-black"}`}
          >
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 w-4/5">
          <li>
            <a
              href="#hero"
              className="text-lg font-semibold hover:text-sky-600 transition-all duration-200"
              aria-label="Go to home section"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-lg font-semibold hover:text-sky-600 transition-all duration-200"
              aria-label="Go to projects section"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-lg font-semibold hover:text-sky-600 transition-all duration-200"
              aria-label="Go to about section"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg font-semibold hover:text-sky-600 transition-all duration-200"
              aria-label="Go to contact section"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="mt-4 md:mt-0 flex justify-end">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            className={`px-4 py-2 border rounded-lg text-lg font-semibold transition duration-300  ${
              darkMode
                ? "border-white text-white hover:bg-sky-500 hover:text-gray-900"
                : "border-gray-800 text-gray-800 hover:bg-sky-500 hover:text-white"
            }`}
          >
            {darkMode ? (
              <FaSun className="inline-block mr-2" />
            ) : (
              <FaMoon className="inline-block mr-2" />
            )}
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
