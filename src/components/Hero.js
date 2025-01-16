import React from "react";
import { useTheme } from "../ThemeContext";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Import icons
import "animate.css";

const Hero = () => {
  const { darkMode } = useTheme();

  return (
    <div id="hero"
      className={`relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      <video
        className="absolute top-0 left-0 w-full h-3/4 object-cover"
        src={darkMode ? "/v6.mp4" : "/v4.mp4"}
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className={`relative p-6 max-w-4xl mx-auto md:mt-16 mt-0 bg-opacity-30 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
        }`}
      >
        <h1
          className="text-5xl md:text-5xl font-bold animate__animated animate__fadeInDown mb-4"
          style={{
            textShadow: darkMode ? "2px 2px 4px rgba(0,0,0,0.7)" : "none",
          }}
        >
          Welcome to My Portfolio
        </h1>
        <p className="mt-4 text-base md:text-lg animate__animated animate__fadeIn mb-4 animate__delay-1s text-justify">
          I'm Shogofa Azar, a Full-stack web developer with extensive experience
          in building efficient software applications. With over 1500+ hours of
          development, I specialize in React, Redux, JavaScript, Node.js,
          Next.js, TypeScript, Tailwind CSS, Bootstrap, Sass, MongoDB, APIs,
          Figma, and Animation Libraries to create high-quality web solutions.
        </p>
        <p className="mt-2 text-sm md:text-md italic animate__animated animate__fadeIn mb-4 animate__delay-2s">
          Building solutions that make a difference.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="#projects"
            className={`inline-block px-6 py-2 md:px-8 md:py-3 font-semibold rounded-lg shadow transition duration-300 ${
              darkMode
                ? "bg-sky-600 text-white hover:bg-sky-500"
                : "bg-sky-600 text-white hover:bg-sky-500"
            }`}
          >
            <span className="animate__animated animate__bounce">
              View My Work
            </span>
          </a>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/shegofa-developer-aa362030b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl md:text-3xl hover:text-sky-400 transition" />
          </a>
          <a
            href="https://github.com/shogof"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl md:text-3xl hover:text-sky-600 transition" />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl md:text-3xl hover:text-sky-300 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
