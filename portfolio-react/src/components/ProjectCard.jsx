import React from "react";

export default function ProjectCard({ title, image, description, repo, demo }) {
  return (
    <div className="s2 bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-2xl">
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
            className="s3 px-4 py-2 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition shadow-2xl"
          >
            GitHub
          </a>

        </div>
      </div>
    </div>
  );
}
