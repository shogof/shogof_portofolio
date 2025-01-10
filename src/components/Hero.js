// src/components/Hero.js
import React from "react";
import { useTheme } from "../ThemeContext";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "animate.css";

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-3/4 object-cover"
        src={darkMode ? "/ww.mp4" : "/e.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className={`relative p-6 max-w-4xl mx-auto mt-16 bg-opacity-30 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        }`}
      >
        <h1
          className="text-5xl font-bold animate__animated animate__fadeInDown mb-4"
          style={{
            textShadow: darkMode ? "2px 2px 4px rgba(0,0,0,0.7)" : "none",
          }}
        >
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-lg animate__animated animate__fadeIn mb-4 animate__delay-1s">
          I'm Shogofa Azar, a Full-stack web developer with extensive experience
          in building efficient software applications. With over 1500+ hours of
          development, I specialize in React, Redux, JavaScript, Node.js,
          Next.js, TypeScript, Tailwind CSS, Bootstrap, Sass, MongoDB, APIs,
          Figma, and Animation Libraries to create high-quality web solutions.
        </p>
        <p className="mt-2 text-md italic animate__animated animate__fadeIn mb-4 animate__delay-2s">
          Building solutions that make a difference.
        </p>
        <a
          href="#projects"
          className={`mt-6 inline-block px-8 py-3 font-semibold rounded-lg shadow transition duration-300 ${
            darkMode
              ? "bg-blue-600 text-white hover:bg-blue-500"
              : "bg-blue-600 text-white hover:bg-blue-500"
          }`}
        >
          <span className="animate__animated animate__bounce">
            View My Work
          </span>
        </a>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl hover:text-blue-400 transition" />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl hover:text-gray-600 transition" />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-3xl hover:text-blue-300 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
