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

import work1 from "./images/work-1.png";
import work2 from "./images/work-2.png";
import work3 from "./images/work-3.png";
import work4 from "./images/work-4.png";
import work5 from "./images/work-5.png";
import work6 from "./images/work-6.png";
import work7 from "./images/work-7.png";
import work8 from "./images/work-8.png";

const projectCard = [
  {
    id: "1",
    image: work1,
    title: "Space Travelers Hub",
    creatorName: "Shogof Azar",
    creatorPos: "Full Stack Dev",
    creatorYear: "2024",
    descriptionShort: "A web app enabling users to share their favorite spots.",
    descriptionLong:
      "A comprehensive web app enabling users to sign up, log in, and effortlessly share their beloved destinations. Share detailed descriptions, addresses, and captivating pictures of your favorite spots with ease.",
    liveLink: "https://space-travelers-bvhc8jnqg-shogofs-projects.vercel.app/",
    sourceLink: "https://github.com/shogof/space-travelers-hub",
    language1: "JavaScript",
    language2: "React",
    language3: "Tailwind CSS",
    language4: "Redux",
    language5: "Axios",
  },
  {
    id: "2",
    image: work2,
    title: "Build-a-Pok-mon-Search-App 🚀",
    creatorName: "Shogof Azar",
    creatorPos: "Full Stack Dev",
    creatorYear: "2023",
    descriptionShort: "A front-end app to book Tesla car test drives.",
    descriptionLong:
      "The app allows admin users to create and delete cars from the availability list. Users can reserve Tesla cars by model, city, and time.",
    liveLink: "https://tesla-car-booking-front.onrender.com/",
    sourceLink: "https://github.com/shogof/Build-a-Pok-mon-Search-App",
    language1: "HTML",
    language2: "CSS",
    language3: "Javascript",
    language4: "API",
  },
  {
    id: "3",
    image: work3,
    title: "Phone number validation 🚀",
    creatorName: "Shogof Azar",
    creatorPos: "Front End Dev",
    creatorYear: "2024",
    descriptionShort: "Track the air pollution levels of countries worldwide.",
    descriptionLong:
      "This application provides current, forecast, and historical air pollution data for multiple countries. Users can check the pollution index of their country by simply scrolling or searching for it using the search bar.",
    liveLink: "https://shogof.github.io/phone-number-validattion/",
    sourceLink: "https://github.com/shogof/phone-number-validattion",
    language1: "HTML",
    language2: "JavaScript",
    language3: "CSS",
    language4: "Validator",
  },
  {
    id: "6",
    image: work4,
    title: "Dior",
    creatorName: "Shogof Azar",
    creatorPos: "Front End Dev",
    creatorYear: "2023",
    descriptionShort:
      "A web app that fetches data from an API to display items.",
    descriptionLong:
      "Our project is a web app that fetches data from an API, displaying items and allowing users to like, comment, and reserve them. It is built with JavaScript and uses the Involvement API to track interactions.",
    liveLink: "https://nextjs-dior.vercel.app",
    sourceLink: "https://github.com/shogof/nextjs-dior",
    language1: "JavaScript",
    language2: "API",
    language3: "CSS",
    language4: "HTML",
    language5: "",
  },
  {
    id: "5",
    image: work5,
    title: "E-commerce Website",
    creatorName: "Shogof Azar",
    creatorPos: "Full Stack Dev",
    creatorYear: "2023",
    descriptionShort: "An e-commerce to browse products and make purchases.",
    descriptionLong:
      "The e-commerce website enables users to browse products, add them to their cart, and complete purchases securely. It includes product filtering, search functionality, and user authentication.",
    liveLink: "https://ecommerce-example.onrender.com",
    sourceLink: "https://github.com/hafiz1379/ecommerce-example",
    language1: "React",
    language2: "Node.js",
    language3: "MongoDB",
    language4: "Express",
    language5: "Redux",
  },
  {
    id: "4",
    image: work6,
    title: "Weather App",
    creatorName: "Shogof Azar",
    creatorPos: "Front End Dev",
    creatorYear: "2023",
    descriptionShort: "A weather app to show real-time weather information.",
    descriptionLong:
      "The weather app fetches real-time weather data and displays it to the users with an easy-to-understand interface. It shows current weather, forecasts, and other related information.",
    liveLink: "https://weather-app-example.onrender.com",
    sourceLink: "https://github.com/hafiz1379/weather-app-example",
    language1: "React",
    language2: "Node.js",
    language3: "CSS",
    language4: "API",
    language5: "",
  },
  {
    id: "7",
    image: work7,
    title: "Blog Website",
    creatorName: "Shogof Azar",
    creatorPos: "Full Stack Dev",
    creatorYear: "2024",
    descriptionShort: "A blog platform for users to share their thoughts.",
    descriptionLong:
      "The blog platform allows users to write and share their thoughts with others. It includes features like commenting, liking, and searching for blog posts.",
    liveLink: "https://blog-website.onrender.com",
    sourceLink: "https://github.com/hafiz1379/blog-website",
    language1: "React",
    language2: "Node.js",
    language3: "Express",
    language4: "MongoDB",
    language5: "CSS",
  },
  {
    id: "8",
    image: work8,
    title: "Task Manager",
    creatorName: "Shogof Azar",
    creatorPos: "Full Stack Dev",
    creatorYear: "2024",
    descriptionShort: "A task manager app for organizing and tracking tasks.",
    descriptionLong:
      "The task manager app allows users to create, edit, and delete tasks. It includes task prioritization, due dates, and categories to keep tasks organized.",
    liveLink: "https://task-manager-app.onrender.com",
    sourceLink: "https://github.com/hafiz1379/task-manager-app",
    language1: "React",
    language2: "Node.js",
    language3: "MongoDB",
    language4: "Express",
    language5: "CSS",
  },
];

// const Project = () => {
//   const [selectedProject, setSelectedProject] = useState(null);
//   const swiperRef = useRef(null);
//   const { darkMode } = useTheme();

//   const handleOpenPopup = (project) => setSelectedProject(project);
//   const handleClosePopup = () => setSelectedProject(null);

//   return (
//     <div
//       className={`container mx-auto p-8 mt-16 ${
//         darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
//       } h-[700px]`}
//     >
//       <h1
//         className={`text-5xl font-extrabold text-center ${
//           darkMode ? "text-teal-400" : "text-[#4fd1c5]"
//         } mb-6`}
//       >
//         My Projects
//       </h1>

//       {/* Swiper Slider */}
//       <Swiper
//         ref={swiperRef}
//         spaceBetween={-30}
//         slidesPerView={2}
//         breakpoints={{
//           640: { slidesPerView: 1 },
//           1024: { slidesPerView: 2 },
//         }}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           width: "90%",
//         }}
//       >
//         {projectCard.map((project) => (
//           <SwiperSlide
//             key={project.id}
//             style={{ display: "flex", justifyContent: "center" }}
//           >
//             <div
//               className={`${
//                 darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
//               } rounded-3xl my-4 py-7 px-5 mx-10 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
//               style={{ width: "90%", minHeight: "400px", maxHeight: "500px" }}
//             >
//               {/* Project Image */}
//               <img
//                 src={project.image}
//                 alt="Project Preview"
//                 className="w-full h-48 object-cover rounded-xl mb-6"
//               />

//               {/* Project Title */}
//               <h3
//                 className={`text-2xl font-semibold mb-3 ${
//                   darkMode
//                     ? "text-teal-400 hover:text-[#4fd1c5]"
//                     : "text-[#4fd1c5] hover:text-teal-600"
//                 } transition-all duration-300`}
//               >
//                 {project.title}
//               </h3>

//               {/* Creator Info */}
//               <div
//                 className={`${
//                   darkMode ? "text-gray-400" : "text-gray-500"
//                 } mb-4 flex items-center space-x-2`}
//               >
//                 <div className="flex items-center space-x-1">
//                   <FontAwesomeIcon
//                     icon={faUserCircle}
//                     className={`text-lg ${
//                       darkMode ? "text-teal-400" : "text-[#4fd1c5]"
//                     }`}
//                   />
//                   <span className="text-sm font-medium">
//                     {project.creatorName}
//                   </span>
//                 </div>
//                 <span className="text-sm">|</span>
//                 <div className="flex items-center space-x-1">
//                   <FontAwesomeIcon
//                     icon={faBriefcase}
//                     className={`text-lg ${
//                       darkMode ? "text-teal-400" : "text-[#4fd1c5]"
//                     }`}
//                   />
//                   <span className="text-sm">{project.creatorPos}</span>
//                 </div>
//                 <span className="text-sm">|</span>
//                 <div className="flex items-center space-x-1">
//                   <FontAwesomeIcon
//                     icon={faCalendarAlt}
//                     className={`text-lg ${
//                       darkMode ? "text-teal-400" : "text-[#4fd1c5]"
//                     }`}
//                   />
//                   <span className="text-sm">{project.creatorYear}</span>
//                 </div>
//               </div>

//               {/* Short Description */}
//               <p
//                 className={`${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 } mb-6 text-base`}
//               >
//                 {project.descriptionShort}
//               </p>

//               {/* Languages (tags or badges) */}
//               {/* <ul className="flex flex-wrap gap-2 mb-6">
//                 <li
//                   className={`${
//                     darkMode ? "bg-teal-500" : "bg-[#38b2ac]"
//                   } text-white py-1 px-3 text-xs rounded-full`}
//                 >
//                   {project.language1}
//                 </li>
//                 <li
//                   className={`${
//                     darkMode ? "bg-teal-500" : "bg-[#38b2ac]"
//                   } text-white py-1 px-3 text-xs rounded-full`}
//                 >
//                   {project.language2}
//                 </li>
//                 <li
//                   className={`${
//                     darkMode ? "bg-teal-500" : "bg-[#38b2ac]"
//                   } text-white py-1 px-3 text-xs rounded-full`}
//                 >
//                   {project.language3}
//                 </li>
//                 <li
//                   className={`${
//                     darkMode ? "bg-teal-500" : "bg-[#38b2ac]"
//                   } text-white py-1 px-3 text-xs rounded-full`}
//                 >
//                   {project.language4}
//                 </li>
//                 {project.language5 && (
//                   <li
//                     className={`${
//                       darkMode ? "bg-teal-500" : "bg-[#38b2ac]"
//                     } text-white py-1 px-3 text-xs rounded-full`}
//                   >
//                     {project.language5}
//                   </li>
//                 )}
//               </ul> */}

//               {/* Call to Action Button */}
//               <button
//                 onClick={() => handleOpenPopup(project)} // Open the modal
//                 className={`${
//                   darkMode ? "bg-teal-500" : "bg-[#4fd1c5]"
//                 } text-white py-2 px-4 rounded-full shadow-md hover:bg-[#38b2ac] transition-all duration-300 transform hover:scale-105`}
//               >
//                 See Project
//               </button>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Navigation Buttons */}
//       <div className="flex justify-between -my-72 relative">
//         <button
//           className={`flex items-center justify-center w-10 h-20 ${
//             darkMode ? "bg-teal-500" : "bg-[#4fd1c5]"
//           } text-white rounded-full hover:bg-[#38b2ac] transition duration-300`}
//           onClick={() => swiperRef.current.swiper.slidePrev()} // Previous slide
//         >
//           <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
//         </button>
//         <button
//           className={`flex items-center justify-center w-10 h-20 ${
//             darkMode ? "bg-teal-500" : "bg-[#4fd1c5]"
//           } text-white rounded-full hover:bg-[#38b2ac] transition duration-300`}
//           onClick={() => swiperRef.current.swiper.slideNext()} // Next slide
//         >
//           <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
//         </button>
//       </div>

//       {/* Modal for Project Details */}
//       {selectedProject && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm z-50">
//           <div
//             className={`${
//               darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
//             } rounded-2xl p-6 w-11/12 md:w-3/4 lg:w-2/3 flex flex-col relative shadow-2xl`}
//           >
//             {/* Title */}
//             <h2
//               className={`text-3xl font-semibold ${
//                 darkMode ? "text-teal-400" : "text-[#4fd1c5]"
//               } mb-4`}
//             >
//               {selectedProject.title}
//             </h2>

//             {/* Additional Text under the title */}
//             <p
//               className={`${
//                 darkMode ? "text-gray-400" : "text-gray-600"
//               } text-sm mb-4`}
//             >
//               {selectedProject.creatorName} ● {selectedProject.creatorPos} ●{" "}
//               {selectedProject.creatorYear}
//             </p>

//             {/* Full-width Image */}
//             <img
//               src={selectedProject.image}
//               alt="Project Full"
//               className="w-full h-64 object-cover rounded-xl mb-6"
//             />

//             {/* Flex container for description (left) and languages (right) */}
//             <div className="flex mb-6">
//               {/* Left side: Description (increased width) */}
//               <div className="w-2/3 pr-6">
//                 <p
//                   className={`${
//                     darkMode ? "text-gray-300" : "text-gray-700"
//                   } mb-4 text-justify text-lg font-['Poppins', sans-serif]`}
//                 >
//                   {selectedProject.descriptionLong}
//                 </p>
//               </div>

//               {/* Right side: Languages (reduced width) */}
//               <div className="w-1/3 pl-6">
//                 <div className="flex flex-wrap gap-x-2 gap-y-2 text-gray-700 mb-4">
//                   <span
//                     className={`${
//                       darkMode ? "bg-teal-500" : "bg-[#38b2ac]"
//                     } text-white py-1 px-2 text-xs rounded-full`}
//                   >
//                     {selectedProject.language1}
//                   </span>
//                   <span
//                     className={`${
//                       darkMode ? "bg-teal-500" : "bg-[#38b2ac]"
//                     } text-white py-1 px-2 text-xs rounded-full`}
//                   >
//                     {selectedProject.language2}
//                   </span>
//                   <span
//                     className={`${
//                       darkMode ? "bg-teal-500" : "bg-[#38b2ac]"
//                     } text-white py-1 px-2 text-xs rounded-full`}
//                   >
//                     {selectedProject.language3}
//                   </span>
//                   <span
//                     className={`${
//                       darkMode ? "bg-teal-500" : "bg-[#38b2ac]"
//                     } text-white py-1 px-2 text-xs rounded-full`}
//                   >
//                     {selectedProject.language4}
//                   </span>
//                   <span
//                     className={`${
//                       darkMode ? "bg-teal-500" : "bg-[#38b2ac]"
//                     } text-white py-1 px-2 text-xs rounded-full`}
//                   >
//                     {selectedProject.language5}
//                   </span>
//                 </div>

//                 {/* Border between languages and buttons */}
//                 <div className="border-t border-teal-200 mt-4"></div>

//                 {/* Buttons */}
//                 <div className="flex space-x-4 mt-4">
//                   <button
//                     onClick={() =>
//                       window.open(selectedProject.liveLink, "_blank")
//                     }
//                     className={`${
//                       darkMode ? "bg-teal-500" : "bg-[#4fd1c5]"
//                     } text-white py-1 px-3 rounded-full shadow-lg hover:bg-[#38b2ac] transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-[#38b2ac] text-sm`}
//                   >
//                     See Live{" "}
//                     <FontAwesomeIcon
//                       icon={faExternalLinkAlt}
//                       className="ml-2"
//                     />
//                   </button>
//                   <button
//                     onClick={() =>
//                       window.open(selectedProject.sourceLink, "_blank")
//                     }
//                     className={`${
//                       darkMode ? "bg-teal-500" : "bg-[#4fd1c5]"
//                     } text-white py-1 px-3 rounded-full shadow-lg hover:bg-[#38b2ac] transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-[#38b2ac] text-sm`}
//                   >
//                     See Source{" "}
//                     <FontAwesomeIcon icon={faGithub} className="ml-2" />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Close Button */}
//             <button
//               onClick={handleClosePopup} // Close the modal
//               className={`${
//                 darkMode ? "bg-teal-500" : "bg-[#38b2ac]"
//               } absolute top-2 right-2 bg-transparent text-gray-700 p-2 rounded-full hover:bg-[#38b2ac]`}
//             >
//               <span className="text-3xl">&times;</span>
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const swiperRef = useRef(null);
  const { darkMode } = useTheme();

  const handleOpenPopup = (project) => setSelectedProject(project);
  const handleClosePopup = () => setSelectedProject(null);

  return (
    <div
      className={`container mx-auto p-8 mt-16 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      } h-[700px]`}
    >
      <h1
        className={`text-5xl font-extrabold text-center ${
          darkMode ? "text-sky-400" : "text-sky-500"
        } mb-6`}
      >
        My Projects
      </h1>

      {/* Swiper Slider */}
      <Swiper
        ref={swiperRef}
        spaceBetween={-30}
        slidesPerView={2}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
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
              {/* Project Image */}
              <img
                src={project.image}
                alt="Project Preview"
                className="w-full h-48 object-cover rounded-xl mb-6"
              />

              {/* Project Title */}
              <h3
                className={`text-2xl font-semibold mb-3 ${
                  darkMode ? "text-sky-400 hover:text-sky-500" : "text-sky-500 hover:text-sky-600"
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
                } text-white py-2 px-4 rounded-full shadow-md hover:bg-sky-600 transition-all duration-300 transform hover:scale-105`}
              >
                See Project
              </button>
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
              className="w-full h-64 object-cover rounded-xl mb-6"
            />

            {/* Flex container for description (left) and languages (right) */}
            <div className="flex mb-6">
              {/* Left side: Description (increased width) */}
              <div className="w-2/3 pr-6">
                <p
                  className={`${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  } mb-4 text-justify text-lg font-['Poppins', sans-serif]`}
                >
                  {selectedProject.descriptionLong}
                </p>
              </div>

              {/* Right side: Languages (reduced width) */}
              <div className="w-1/3 pl-6">
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
                  <span
                    className={`${
                      darkMode ? "bg-sky-500" : "bg-sky-500"
                    } text-white py-1 px-2 text-xs rounded-full`}
                  >
                    {selectedProject.language5}
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

