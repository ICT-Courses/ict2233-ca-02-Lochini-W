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
    <section className="relative h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 overflow-hidden px-6 flex items-center justify-center">
      {/* Hero Panel */}
      <div
        ref={panelRef}
        className={`absolute top-0 w-full h-full bg-gray-100 dark:bg-gray-800 shadow-lg flex items-center justify-center ${styles.hide} ${styles.heroPanelEffect}`}
      >
        <div className="flex flex-col items-center justify-center h-full p-8 text-center">
          <h1 className="mb-4 font-bold text-gray-900 dark:text-white"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Hi, I’m Lochini 👋
          </h1>
          <p className="mb-6 text-gray-600 dark:text-gray-300"
             style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}>
            A passionate web developer
          </p>
          <img
            src={heroPhoto}
            alt="Lochini"
            className="w-40 h-40 rounded-full mb-6 object-cover"
          />
          <Link
            to="/about"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
          >
            Learn More About Me
          </Link>
        </div>
      </div>
    </section>
  );
}
