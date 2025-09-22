import React, { useEffect, useRef } from "react";
import tidytailImg from "../assets/images/tidytail.jpg";
import cafeappImg from "../assets/images/cafeapp.jpg";
import filmdbImg from "../assets/images/filmDBicon.jpg";
import styles from "./Projects.module.css";

export default function Projects() {
  const projectsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
            entry.target.classList.remove(styles.hide);
          } else {
            entry.target.classList.remove(styles.show);
            entry.target.classList.add(styles.hide);
          }
        });
      },
      { threshold: 0.2 }
    );

    projectsRef.current.forEach((project) => {
      if (project) observer.observe(project);
    });

    return () => {
      projectsRef.current.forEach((project) => {
        if (project) observer.unobserve(project);
      });
    };
  }, []);

  const projects = [
    { title: "🐾 TidyTailApp — Pet Care Organizer", image: tidytailImg, link: "#" },
    { title: "☕ Café Inventory Management App", image: cafeappImg, link: "#" },
    { title: "🎬 FilmDB — Local Movie Database", image: filmdbImg, link: "#" },
  ];

  return (
    <div className="min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectsRef.current[index] = el)}
            className={`bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform hover:scale-105 hover:shadow-xl ${styles.hide} ${styles.cardHoverEffect}`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
