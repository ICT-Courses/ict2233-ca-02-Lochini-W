import React from "react";

export default function ProjectCard({ title, image, description, repo, demo }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex space-x-4">
          {/* GitHub button */}
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition"
          >
            GitHub
          </a>

          {/* Demo button with tooltip if no demo */}
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            >
              Live Demo
            </a>
          ) : (
            <div className="relative group">
              <button
                disabled
                className="px-4 py-2 bg-gray-400 text-white font-medium rounded-lg cursor-not-allowed"
              >
                Live Demo
              </button>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm px-3 py-1 rounded-lg shadow-lg">
                No demo vid
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-gray-800"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
