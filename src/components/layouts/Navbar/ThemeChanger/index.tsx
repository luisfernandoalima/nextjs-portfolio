"use client";

import { useState, useEffect, useRef } from "react";

import { FaSun, FaMoon } from "react-icons/fa";

import './ThemeChanger.scss'

export const ThemeChanger = () => {
    const [theme, setTheme] = useState("light")
    const inputRef = useRef<HTMLInputElement | null>(null)

    useEffect(() => {
        if(inputRef.current){
            const savedTheme = localStorage.getItem('theme') || 'light'
            setTheme(savedTheme)
            document.documentElement.setAttribute('data-theme', savedTheme)
            if (savedTheme == 'dark') inputRef.current.checked = true
        }
    }, [])


    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
        // document.documentElement.classList.toggle('dark', newTheme === 'dark');
        document.documentElement.setAttribute('data-theme', newTheme)
        localStorage.setItem("theme", newTheme)
    }


  return (
    <div className="switch">
      <input type="checkbox" className="checkBox" id="checkBox" ref={inputRef} onChange={toggleTheme}/>
      <label htmlFor="checkBox" className="label">
        <FaMoon className="fa-moon"/>
        <FaSun className="fa-sun"/>
        <div className="ball"></div>
      </label>
    </div>
  );
};
