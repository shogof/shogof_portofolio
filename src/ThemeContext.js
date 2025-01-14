import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Check the stored theme preference from localStorage when the page loads
  const storedTheme = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(
    storedTheme ? JSON.parse(storedTheme) : true
  ); // Default to darkMode on page load

  // Toggle darkMode and save the preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", JSON.stringify(newMode)); // Store the new theme in localStorage
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
