import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Lochini</div>

      <div className="flex items-center space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${isActive ? "bg-gray-200 dark:bg-gray-700" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${isActive ? "bg-gray-200 dark:bg-gray-700" : ""}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${isActive ? "bg-gray-200 dark:bg-gray-700" : ""}`
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-3 py-2 rounded ${isActive ? "bg-gray-200 dark:bg-gray-700" : ""}`
          }
        >
          Contact
        </NavLink>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}
