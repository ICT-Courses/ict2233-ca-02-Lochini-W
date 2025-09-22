import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-2 border-t-2 border-blue-500">
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
            <a href="#" className="hover:text-blue-600 transition"><FaFacebook size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-blue-700 transition"><FaLinkedin size={24} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
