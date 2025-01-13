"use client";

import { useState, useEffect, useRef } from "react";

import { FaSun, FaMoon } from "react-icons/fa";

import "./ThemeChanger.scss";

export const ThemeChanger = ({ customId }: { customId: string }) => {
  const [theme, setTheme] = useState("light");
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      if (savedTheme == "dark") inputRef.current.checked = true;
    }
  }, []);

  const toggleTheme = () => {
    const inputs = document.querySelectorAll(".checkBox");
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    inputs.forEach(input => (input as HTMLInputElement).checked = newTheme === "dark")
   
  };

  return (
    <div className="switch">
      <input
        type="checkbox"
        className="checkBox"
        id={customId}
        ref={inputRef}
        onChange={toggleTheme}
      />
      <label htmlFor={customId} className="label">
        <FaMoon className="fa-moon" />
        <FaSun className="fa-sun" />
        <div className="ball"></div>
      </label>
    </div>
  );
};
