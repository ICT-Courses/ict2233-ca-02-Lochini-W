import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"; // custom CSS for dark mode

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark"); // toggle dark mode globally
  };

  return (
    <nav className="s3 bg-gray-100 dark:bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold pl-4">Lochini Weerasinghe</div>

      <div className="flex items-center space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${isActive ? "active" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${isActive ? "active" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${isActive ? "active" : ""}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${isActive ? "active" : ""}`
          }
        >
          Contact
        </NavLink>

        <button
          onClick={toggleDarkMode}
          className="ml-4 px-3 py-2 rounded dark-toggle"
        >
          {darkMode ? "☀️":"🌙" }
        </button>
      </div>
    </nav>
  );
}
