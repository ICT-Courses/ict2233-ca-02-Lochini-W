import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-2">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left Side */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Lochini. All rights reserved.
        </p>

        {/* Right Side (Socials / Extras) */}
        <div className="flex gap-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
