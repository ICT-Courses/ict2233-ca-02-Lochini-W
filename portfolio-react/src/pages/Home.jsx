import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import heroPhoto from "../assets/Lochini-photo.jpeg";
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
    <section className="relative min-h-screen text-gray-800 dark:text-gray-200 overflow-hidden px-6 flex flex-col items-center justify-start gap-10 dark-toggle">

      {/* Hero Image - Centered */}
      <div className=" flex items-center justify-center mt-16">
        <img
          src={heroPhoto}
          alt="Lochini"
          className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full shadow-2xl object-cover"
        />
      </div>

      {/* Hero Text Panel - Appears on Scroll */}
      <div
        ref={panelRef}
        className={`s3 w-full max-w-xl flex flex-col items-center justify-center p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-700 transition-transform duration-700 ${styles.hide} ${styles.heroPanelEffect} mt-4 mb-8`}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
          Hi, I'm Lochini Weerasinghe
        </h1>
        <p className="text-lg sm:text-xl mb-6 text-center">
          A passionate undergraduate with the goal of becoming developer and to craft interactive & modern web experiences.
        </p>
        <Link
          to="/about"
          className="s2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all shadow-2xl"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
        >
          Learn More About Me
        </Link>
      </div>

    </section>
  );
}
