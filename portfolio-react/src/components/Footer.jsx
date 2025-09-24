import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-2 shadow-2xl s3">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* Left Side */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Lochini. All rights reserved.</p>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Page Links */}
          <div className="flex gap-4">
            <Link to="/" className="hover:text-blue-500 transition">Home</Link>
            <Link to="/about" className="hover:text-blue-500 transition">About</Link>
            <Link to="/projects" className="hover:text-blue-500 transition">Projects</Link>
            <Link to="/contact" className="hover:text-blue-500 transition">Contact</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/in/buvaneswari-lochini-weerasinghe-296106381/" className="hover:text-blue-700 transition"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
