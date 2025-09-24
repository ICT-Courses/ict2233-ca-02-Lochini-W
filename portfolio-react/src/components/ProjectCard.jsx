import React from "react";
import styles from "../pages/Projects.module.css";

export default function ProjectCard({
  title,
  image,
  description,
  repo,
  demo,
  onDemoClick,
  showBubble,
}) {
  return (
    <div className="s2 relative bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl border-[1px] border-[rgba(204, 204, 204, 1)]">
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col p-6 flex-grow">
        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900 dark:text-white leading-tight">
          {title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 flex-grow dark-toggle2">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-auto">
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center px-6 py-3 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-full transition-colors duration-200 hover:from-emerald-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            GitHub
          </a>
          {demo ? (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="s4 w-full text-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full transition-colors duration-200 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-lg"
            >
              Demo Video
            </a>
          ) : (
            <button
              onClick={onDemoClick}
              className="s1 relative w-full text-center px-6 py-3 bg-gray-400 text-gray-800 font-semibold rounded-full transition-colors duration-200 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            >
              Demo Video
              {showBubble && (
                <div
                  className={`${styles.bubble} absolute -top-12 left-1/2 -translate-x-1/2 text-xs w-max bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 p-2 rounded-lg shadow-lg animate-fade-in-up`}
                >
                  No demo available yet.
                </div>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
