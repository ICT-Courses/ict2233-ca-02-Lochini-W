import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroPhoto from "../assets/hero-photo.jpg"; // replace with your photo path

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-hidden px-6 flex items-center justify-center">
      {/* Sliding Panel */}
      <div
        className="absolute top-0 right-0 w-full h-full bg-gray-100 dark:bg-gray-800 shadow-lg transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(${scrollY > 100 ? "0%" : "100%"})`,
        }}
      >
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <h1 className="text-[clamp(2rem,5vw,4rem)] font-bold mb-4">
            Hi, I’m Lochini 👋
          </h1>
          <p className="text-[clamp(1rem,2.5vw,1.5rem)] mb-6 text-gray-600 dark:text-gray-300">
            A passionate web developer
          </p>
          <img
            src={heroPhoto}
            alt="Lochini"
            className="w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 rounded-full object-cover shadow-md"
          />
        </div>
      </div>


          A passionate web developer
        </p>
        <Link
          to="/about"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          Learn More About Me
        </Link>
      </div>
    </section>
  );
}
