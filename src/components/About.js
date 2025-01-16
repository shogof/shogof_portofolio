// src/components/About.js
import React, { useEffect, useState } from "react";
import { useTheme } from "../ThemeContext";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const About = () => {
  const { darkMode } = useTheme();
  const [progress, setProgress] = useState({});
  const [activeTab, setActiveTab] = useState("frontend");

  const skills = {
    frontend: [
      { name: "HTML", percent: 100, color: "#cc6699" },
      { name: "CSS", percent: 100, color: "#31A8FF" },
      { name: "JavaScript", percent: 80, color: "#f7df1e" },
      { name: "React", percent: 85, color: "#61dafb" },
      { name: "Redux", percent: 80, color: "#764abc" },
      { name: "TypeScript", percent: 65, color: "#007acc" },
      { name: "Tailwind CSS", percent: 100, color: "#38b2ac" },
      { name: "Bootstrap", percent: 80, color: "#563d7c" },
    ],
    backend: [
      { name: "Node.js", percent: 60, color: "#68a063" },
      { name: "Express.js", percent: 70, color: "#cc6699" },
      { name: "MongoDB", percent: 80, color: "#47A248" },
      { name: "APIs", percent: 75, color: "#f0db4f" },
      { name: "Python", percent: 65, color: "#3776AB" },
      { name: "RESTful APIs", percent: 85, color: "#4c51bf" },
      { name: "NPM", percent: 80, color: "#61dafb" },
      { name: "Microservices", percent: 60, color: "#563d7c" },
    ],
    otherSkills: [
      { name: "Postman", percent: 70, color: "#FF6C37" },
      { name: "Routing", percent: 75, color: "#CA4245" },
      { name: "Next.js", percent: 70, color: "#47A248" },
      { name: "Sass", percent: 65, color: "#cc6699" },
      { name: "Figma", percent: 80, color: "#563d7c" },
      { name: "Teamwork Skills", percent: 90, color: "#F6E05E" },
      { name: "Animation", percent: 70, color: "#61dafb" },
    ],
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        const updated = { ...prev };
        let allDone = true;

        [...skills.frontend, ...skills.backend, ...skills.otherSkills].forEach(
          (skill) => {
            if (updated[skill.name] < skill.percent) {
              updated[skill.name] = Math.min(
                updated[skill.name] + 1,
                skill.percent
              );
              allDone = false;
            }
          }
        );

        if (allDone) clearInterval(timer);
        return updated;
      });
    }, 20);

    const initialProgress = {};
    [...skills.frontend, ...skills.backend, ...skills.otherSkills].forEach(
      (skill) => {
        initialProgress[skill.name] = 0;
      }
    );
    setProgress(initialProgress);

    return () => clearInterval(timer);
  }, []);

  const radius = 30;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;

  const renderSkills = (skillSet) => {
    return (
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 max-w-full mx-auto">
        {skillSet.map((skill) => {
          const strokeDashoffset =
            circumference - (circumference * (progress[skill.name] || 0)) / 100;

          return (
            <div key={skill.name} className="flex flex-col items-center">
              <svg width={70} height={70}>
                <circle
                  stroke="#d6d6d6"
                  fill="transparent"
                  r={radius}
                  cx="35"
                  cy="35"
                  strokeWidth={strokeWidth}
                />
                <circle
                  stroke={skill.color}
                  fill="transparent"
                  r={radius}
                  cx="35"
                  cy="35"
                  strokeWidth={strokeWidth}
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  fill={darkMode ? "white" : "black"}
                  dy=".3em"
                  fontSize="14"
                >
                  {progress[skill.name] || 0}%
                </text>
              </svg>
              <span className="mt-1 text-sm font-semibold">{skill.name}</span>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="h-1"></div>
      <div
        id="about"
        className={`pb-20 pt-16 px-4 md:px-8 mx-0 center transition-all duration-300 shadow-lg my-24 rounded-lg ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <h2 className="text-5xl font-bold text-left mt-4 mb-8 text-sky-600">
          About Me
        </h2>
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <div className="md:max-w-xl mb-8 md:mb-0">
            <p className="mt-0 text-lg m-5 max-w-full mx-auto text-justify">
              As a web developer, I am passionate about creating user-friendly
              websites and web applications. With a strong foundation in
              front-end technologies like HTML, CSS, JavaScript, and frameworks
              such as React and Vue.js, along with back-end technologies like
              Node.js and Express, I focus on writing clean, efficient code and
              building responsive, accessible experiences. I am committed to
              creating seamless, intuitive interfaces while ensuring performance
              and scalability. I thrive in both independent and collaborative
              settings, continuously improving my skills through hands-on
              projects and ongoing learning.
            </p>
          </div>

          <div className="md:w-2/3 flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setActiveTab("frontend")}
                className={`px-4 py-2 rounded-l-lg ${
                  activeTab === "frontend"
                    ? "bg-sky-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Front-End
              </button>
              <button
                onClick={() => setActiveTab("backend")}
                className={`px-4 py-2 ${
                  activeTab === "backend"
                    ? "bg-sky-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Back-End
              </button>
              <button
                onClick={() => setActiveTab("otherSkills")}
                className={`px-4 py-2 rounded-r-lg ${
                  activeTab === "otherSkills"
                    ? "bg-sky-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                Other Skills
              </button>
            </div>

            {renderSkills(skills[activeTab])}
          </div>
        </div>

        {/* Centered Resume Button on Mobile Only */}
        <div className="flex justify-center mt-6 md:justify-start">
          <a
            href="#projects"
            className={`inline-block px-4 py-3 font-semibold rounded-lg shadow transition duration-300 text-lg ${
              darkMode
                ? "border-2 border-sky-600 text-black-900 hover:bg-sky-100"
                : "border-2 border-sky-600 text-white-900 hover:bg-sky-100"
            }`}
          >
            <span className="animate__animated animate__bounce">
              Get my Resume
            </span>
          </a>
        </div>

        <div className="mt-4 -mb-8 flex justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-sky-600 hover:text-blue-400 transition" />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-sky-600 hover:text-gray-600 transition" />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-sky-600 text-3xl hover:text-blue-300 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
