import React from "react";

export default function ProjectCard({ title, image, description, repo, demo }) {
  return (
    <div className="s4 bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300">
      
      {/* Image Container */}
      <div className="s2 w-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-t-2xl p-4">
        <img
          src={image}
          alt={title}
          className="max-h-64 max-w-full object-contain rounded-lg shadow-inner"
        />
      </div>

      {/* Text and Buttons */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4 dark-toggle2">{description}</p>
        <div className="flex space-x-4">
          {/* GitHub Button */}
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition shadow border border-black"
          >
            GitHub
          </a>

          {/* Demo Button */}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition shadow border border-black"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
