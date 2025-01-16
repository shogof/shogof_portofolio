// src/App.js
import React from "react";
import "./index.css";
import { ThemeProvider } from "./ThemeContext";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Header from './components/Header';
import "animate.css";
import "swiper/swiper-bundle.css";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
