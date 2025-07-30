import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("blue");

  const themes = {
    blue: {
      primary: "text-blue-600",
      primaryBg: "bg-blue-600",
      primaryHover: "hover:bg-blue-700",
      primaryLight: "bg-blue-50",
      primaryBorder: "border-blue-600",
      gradient: "from-blue-600 to-blue-800",
    },
    green: {
      primary: "text-green-600",
      primaryBg: "bg-green-600",
      primaryHover: "hover:bg-green-700",
      primaryLight: "bg-green-50",
      primaryBorder: "border-green-600",
      gradient: "from-green-600 to-green-800",
    },
    purple: {
      primary: "text-purple-600",
      primaryBg: "bg-purple-600",
      primaryHover: "hover:bg-purple-700",
      primaryLight: "bg-purple-50",
      primaryBorder: "border-purple-600",
      gradient: "from-purple-600 to-purple-800",
    },
    red: {
      primary: "text-red-600",
      primaryBg: "bg-red-600",
      primaryHover: "hover:bg-red-700",
      primaryLight: "bg-red-50",
      primaryBorder: "border-red-600",
      gradient: "from-red-600 to-red-800",
    },
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("QB365 Public School-theme");
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const changeTheme = (theme) => {
    setCurrentTheme(theme);
    localStorage.setItem("QB365 Public School-theme", theme);
  };

  const value = {
    currentTheme,
    themes,
    theme: themes[currentTheme],
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
