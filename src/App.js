// src/App.js
import React from "react";
import "./index.css";
import { ThemeProvider } from "./ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
