import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import heroPhoto from "../assets/hero-photo.jpg";
import styles from "./Home.module.css";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const panelRef = useRef(null);

  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (scrollY > 50) {
      panel.classList.add(styles.show);
      panel.classList.remove(styles.hide);
    } else {
      panel.classList.remove(styles.show);
      panel.classList.add(styles.hide);
    }
  }, [scrollY]);

  return (
    <section className="relative h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 overflow-hidden px-6 flex flex-col lg:flex-row items-center justify-center gap-10">
      
      {/* Hero Text Panel */}
      <div
        ref={panelRef}
        className={`flex-1 flex flex-col items-center lg:items-start justify-center p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-700 transition-transform duration-700 ${styles.hide} ${styles.heroPanelEffect}`}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center lg:text-left">
          Hi, I'm Lochini
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-center lg:text-left">
          A passionate web developer crafting interactive & modern web experiences.
        </p>
        <Link
          to="/about"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
        >
          Learn More About Me
        </Link>
      </div>

      {/* Hero Image */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={heroPhoto}
          alt="Lochini"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full shadow-2xl object-cover"
        />
      </div>
      
    </section>
  );
}
