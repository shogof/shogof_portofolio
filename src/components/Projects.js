import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import "swiper/swiper-bundle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faUserCircle,
  faBriefcase,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../ThemeContext";

import work1 from "../images/work-1.png";
import work2 from "../images/work-2.png";
import work3 from "../images/work-3.png";
import work4 from "../images/work-4.png";
import work5 from "../images/work-5.png";
import work6 from "../images/work-6.png";
import work7 from "../images/work-7.png";
import work8 from "../images/work-8.png";

const projectCard = [
  {
    id: "1",
    image: work1,
    title: "Space Travelers Hub",
    creatorName: "Shogof Azar",
    creatorPos: "Full Stack Dev",
    creatorYear: "2024",
    descriptionShort:
      "Explore and manage SpaceX rockets, missions, and dragons with an immersive web app.",
    descriptionLong:
      "Space Travelers Hub lets users interact with SpaceX rockets, missions, and dragons, track participation via profiles, and manage bookings. Built with React, Redux, and Tailwind CSS for a seamless experience.",
    liveLink: "https://space-travelers-gqabm96uu-shogofs-projects.vercel.app/",
    sourceLink: "https://github.com/shogof/space-travelers-hub",
    language1: "JavaScript",
    language2: "React",
    language3: "Tailwind CSS",
    language4: "Redux",
  },
  {
    id: "2",
    image: work2,
    title: "Build-a-Pok-mon-Search-App 🚀",
    creatorName: "Shogof Azar",
    creatorPos: "Full Stack Dev",
    creatorYear: "2023",
    descriptionShort:
      "A tool to search and explore detailed information about Pokémon with advanced filters.",
    descriptionLong:
      "The Pokémon Search App allows users to search Pokémon by name, type, or abilities, and view their stats, moves, and evolutions. Featuring an intuitive interface with advanced filtering options.",
    liveLink: "https://shogof.github.io/Build-a-Pok-mon-Search-App/",
    sourceLink: "https://github.com/shogof/Build-a-Pok-mon-Search-App",
    language1: "HTML",
    language2: "CSS",
    language3: "JavaScript",
    language4: "API",
  },
  {
    id: "3",
    image: work3,
    title: "JavaScript-Capstone-Portfolio 🚀",
    creatorName: "Shogof Azar",
    creatorPos: "Full Stack Dev",
    creatorYear: "2023",
    descriptionShort:
      "Interactive personal portfolio highlighting front-end development skills and projects.",
    descriptionLong:
      "The JavaScript-Capstone-Portfolio is the final project for my JavaScript course, showcasing my front-end development skills, projects, and achievements in an engaging personal portfolio.",
    liveLink: "https://shogof.github.io/JavaScript-Capstone-project-Portfolio/",
    sourceLink: "https://github.com/shogof/js-Capstone-Project-Portfolio",
    language1: "HTML",
    language2: "CSS",
    language3: "JavaScript",
    language4: "GitHub",
  },
  {
    id: "4",
    image: work4,
    title: "Weather App",
    creatorName: "Shogof Azar",
    creatorPos: "Front End Dev",
    creatorYear: "2023",
    descriptionShort:
      "React-based drum machine app to create beats with interactive pads, keyboard, and sound kits.",
    descriptionLong:
      "The Drum Machine is a React app where users create beats with clickable pads or keyboard keys (Q, W, E, A, S, D, Z, X, C). It features power toggle, volume control, and sound kit switching, offering a fun music-making experience.",
    liveLink:
      "https://markdown-previewer-dvjl-4scuzoxej-shogofs-projects.vercel.app/",
    sourceLink: "https://github.com/shogof/drum-machine-p",
    language1: "React",
    language2: "JavaScript",
    language3: "CSS",
    language4: "HTML",
  },
  {
    id: "5",
    image: work5,
    title: "Phone number validation 🚀",
    creatorName: "Shogof Azar",
    creatorPos: "Front End Dev",
    creatorYear: "2024",
    descriptionShort:
      "A global phone number validator using regex patterns for Iran, Afghanistan, and the USA.",
    descriptionLong:
      "The Phone Number Validation project robustly validates phone numbers for Iran, Afghanistan, and the USA using modern JavaScript and regex patterns to ensure accuracy and proper formatting.",
    liveLink: "https://shogof.github.io/phone-number-validattion/",
    sourceLink: "https://github.com/shogof/phone-number-validattion",
    language1: "HTML",
    language2: "JavaScript",
    language3: "CSS",
    language4: "Validator",
  },
  {
    id: "6",
    image: work6,
    title: "Dior",
    creatorName: "Shogof Azar",
    creatorPos: "Front End Dev",
    creatorYear: "2023",
    descriptionShort:
      "A responsive Dior-themed website built with Next.js, featuring interactive elements.",
    descriptionLong:
      "A Dior-inspired website built with Next.js and Tailwind CSS, focusing on performance, responsive design, and dynamic content. It provides smooth user experiences with interactive elements and modern styling.",
    liveLink: "https://nextjs-dior.vercel.app",
    sourceLink: "https://github.com/shogof/nextjs-dior",
    language1: "Nextjs",
    language2: "Tailwind CSS",
    language3: "CSS",
    language4: "HTML",
  },
  {
    id: "7",
    image: work7,
    title: "Plaindrom Cheeker",
    creatorName: "Shogof Azar",
    creatorPos: "Full Stack Dev",
    creatorYear: "2024",
    descriptionShort:
      "A simple web app to check if a word or phrase is a palindrome using HTML, CSS, and JavaScript.",
    descriptionLong:
      "This web app checks if a word or phrase is a palindrome. Built with HTML, CSS, and JavaScript, it allows users to input text and check whether it reads the same forwards and backwards, offering a clean, user-friendly interface.",
    liveLink: "https://shogof.github.io/Plaindrom-Checker/",
    sourceLink: "https://github.com/shogof/Plaindrom-Checker",
    language1: "HTML",
    language2: "CSS",
    language3: "JavaScript",
    language4: "API",
  },
  {
    id: "8",
    image: work8,
    title: "MarkDown Previewer",
    creatorName: "Shogof Azar",
    creatorPos: "Full Stack Dev",
    creatorYear: "2024",
    descriptionShort:
      "React-based app for writing and previewing Markdown in real-time with a split-screen interface.",
    descriptionLong:
      "This React-based Markdown Previewer allows users to write and preview Markdown in real-time. The split-screen interface displays the typed content on one side and the rendered HTML on the other, offering a smooth interactive experience.",
    liveLink:
      "https://markdown-previewer-6pio-6pikth3h0-shogofs-projects.vercel.app/",
    sourceLink: "https://github.com/shogof/markdown-previewer",
    language1: "JavaScript",
    language2: "GitHub",
    language3: "CSS",
    language4: "HTML",
  },
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const swiperRef = useRef(null);
  const { darkMode } = useTheme();

  const handleOpenPopup = (project) => setSelectedProject(project);
  const handleClosePopup = () => setSelectedProject(null);

  return (
    <div
      className={`container mx-auto p-8 mt-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"
      } h-[700px]`}
    >
      <h1
        id="projects"
        className={`text-5xl font-extrabold text-center ${
          darkMode ? "text-sky-400" : "text-sky-500"
        } mb-6`}
      >
        My Projects
      </h1>
      <Swiper
        ref={swiperRef}
        spaceBetween={-30}
        slidesPerView={1} // Default to 1 slide for mobile
        breakpoints={{
          640: { slidesPerView: 1 }, // Show 1 slide on mobile (below 640px)
          1024: { slidesPerView: 2 }, // Show 2 slides on desktop (above 640px)
        }}
        style={{
          display: "flex",
          justifyContent: "center",
          width: "90%",
        }}
      >
        {projectCard.map((project) => (
          <SwiperSlide
            key={project.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              className={`${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
              } rounded-3xl my-4 py-7 px-5 mx-10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
              style={{ width: "90%", minHeight: "400px", maxHeight: "500px" }}
            >
              {/* Mobile: Only show the image and button */}
              <div className="block md:hidden">
                <img
                  src={project.image}
                  alt="Project Preview"
                  className="w-full h-64 object-cover rounded-xl mb-6" // Ensure the image fills the space well
                />
                <button
                  onClick={() => handleOpenPopup(project)} // Open the modal
                  className={`${
                    darkMode ? "bg-sky-500" : "bg-sky-500"
                  } text-white py-3 px-6 rounded-full shadow-md hover:bg-sky-600 transition-all duration-300 transform hover:scale-105`} // Make button bigger on mobile
                >
                  See Project
                </button>
              </div>

              {/* Desktop: Show all content */}
              <div className="hidden md:block">
                {/* Project Image */}
                <img
                  src={project.image}
                  alt="Project Preview"
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />

                {/* Project Title */}
                <h3
                  className={`text-2xl font-semibold mb-3 ${
                    darkMode
                      ? "text-sky-400 hover:text-sky-500"
                      : "text-sky-500 hover:text-sky-600"
                  } transition-all duration-300`}
                >
                  {project.title}
                </h3>

                {/* Creator Info */}
                <div
                  className={`${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  } mb-4 flex items-center space-x-2`}
                >
                  <div className="flex items-center space-x-1">
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className={`text-lg ${
                        darkMode ? "text-sky-400" : "text-sky-500"
                      }`}
                    />
                    <span className="text-sm font-medium">
                      {project.creatorName}
                    </span>
                  </div>
                  <span className="text-sm">|</span>
                  <div className="flex items-center space-x-1">
                    <FontAwesomeIcon
                      icon={faBriefcase}
                      className={`text-lg ${
                        darkMode ? "text-sky-400" : "text-sky-500"
                      }`}
                    />
                    <span className="text-sm">{project.creatorPos}</span>
                  </div>
                  <span className="text-sm">|</span>
                  <div className="flex items-center space-x-1">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className={`text-lg ${
                        darkMode ? "text-sky-400" : "text-sky-500"
                      }`}
                    />
                    <span className="text-sm">{project.creatorYear}</span>
                  </div>
                </div>

                {/* Short Description */}
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } mb-6 text-base`}
                >
                  {project.descriptionShort}
                </p>

                {/* Call to Action Button */}
                <button
                  onClick={() => handleOpenPopup(project)} // Open the modal
                  className={`${
                    darkMode ? "bg-sky-500" : "bg-sky-500"
                  } text-white md:w-full py-2 px-4 rounded-full shadow-md hover:bg-sky-600 transition-all duration-300 transform hover:scale-105`}
                >
                  See Project
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="flex justify-between -my-72 relative">
        <button
          className={`flex items-center justify-center w-10 h-20 ${
            darkMode ? "bg-sky-500" : "bg-sky-500"
          } text-white rounded-full hover:bg-sky-600 transition duration-300`}
          onClick={() => swiperRef.current.swiper.slidePrev()} // Previous slide
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
        </button>
        <button
          className={`flex items-center justify-center w-10 h-20 ${
            darkMode ? "bg-sky-500" : "bg-sky-500"
          } text-white rounded-full hover:bg-sky-600 transition duration-300`}
          onClick={() => swiperRef.current.swiper.slideNext()} // Next slide
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
        </button>
      </div>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
          <div
            className={`${
              darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            } rounded-2xl p-6 w-11/12 md:w-3/4 lg:w-2/3 flex flex-col relative shadow-2xl`}
          >
            {/* Title */}
            <h2
              className={`text-3xl font-semibold ${
                darkMode ? "text-sky-400" : "text-sky-500"
              } mb-4`}
            >
              {selectedProject.title}
            </h2>

            {/* Additional Text under the title */}
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-600"
              } text-sm mb-4`}
            >
              {selectedProject.creatorName} ● {selectedProject.creatorPos} ●{" "}
              {selectedProject.creatorYear}
            </p>

            {/* Full-width Image */}
            <img
              src={selectedProject.image}
              alt="Project Full"
              className="w-full h-56 sm:h-64 md:h-72 lg:h-64 object-cover rounded-xl mb-6" // Adjust height on mobile and other screens
            />

            {/* Flex container for description (left) and languages (right) */}
            <div className="flex flex-col md:flex-row mb-6">
              {/* Left side: Description */}
              <div className="w-full md:w-2/3 pr-6 mb-4 md:mb-0">
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } mb-4 text-justify text-lg font-['Poppins', sans-serif]`}
                >
                  {selectedProject.descriptionLong}
                </p>
              </div>

              {/* Right side: Languages */}
              <div className="w-full md:w-1/3 pl-6">
                <div className="flex flex-wrap gap-x-2 gap-y-2 text-gray-700 mb-4">
                  <span
                    className={`${
                      darkMode ? "bg-sky-500" : "bg-sky-500"
                    } text-white py-1 px-2 text-xs rounded-full`}
                  >
                    {selectedProject.language1}
                  </span>
                  <span
                    className={`${
                      darkMode ? "bg-sky-500" : "bg-sky-500"
                    } text-white py-1 px-2 text-xs rounded-full`}
                  >
                    {selectedProject.language2}
                  </span>
                  <span
                    className={`${
                      darkMode ? "bg-sky-500" : "bg-sky-500"
                    } text-white py-1 px-2 text-xs rounded-full`}
                  >
                    {selectedProject.language3}
                  </span>
                  <span
                    className={`${
                      darkMode ? "bg-sky-500" : "bg-sky-500"
                    } text-white py-1 px-2 text-xs rounded-full`}
                  >
                    {selectedProject.language4}
                  </span>
                </div>

                {/* Border between languages and buttons */}
                <div className="border-t border-sky-200 mt-4"></div>

                {/* Buttons */}
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() =>
                      window.open(selectedProject.liveLink, "_blank")
                    }
                    className={`${
                      darkMode ? "bg-sky-500" : "bg-sky-500"
                    } text-white py-1 px-3 rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-sky-500 text-sm`}
                  >
                    See Live{" "}
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="ml-2"
                    />
                  </button>
                  <button
                    onClick={() =>
                      window.open(selectedProject.sourceLink, "_blank")
                    }
                    className={`${
                      darkMode ? "bg-sky-500" : "bg-sky-500"
                    } text-white py-1 px-3 rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-sky-500 text-sm`}
                  >
                    See Source{" "}
                    <FontAwesomeIcon icon={faGithub} className="ml-2" />
                  </button>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={handleClosePopup} // Close the modal
              className={`${
                darkMode ? "bg-sky-500" : "bg-sky-500"
              } absolute top-2 right-2 bg-transparent text-gray-700 p-2 rounded-full hover:bg-sky-600`}
            >
              <span className="text-3xl">&times;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
