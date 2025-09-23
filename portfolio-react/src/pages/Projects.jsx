import React, { useEffect, useRef } from "react";
import tidytailImg from "../assets/images/tidytail.jpg";
import cafeappImg from "../assets/images/cafeapp.jpg";
import filmdbImg from "../assets/images/filmDBicon.png";
import ProjectCard from "../components/ProjectCard";
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
    {
      title: "🐾 TidyTailApp — Pet Care Organizer",
      image: tidytailImg,
      description:
        "A desktop app to track pet vaccinations, vet visits, and daily care tasks. Built with C# and SQL Server.",
      repo: "https://github.com/ICT-Courses/application-development-ca1-Lochini-W.git",
      demo: "https://drive.google.com/file/d/13czE5FTf09meY4E8qRFUrUOJ_0tZXZz6/view?usp=sharing",
    },
    {
      title: "☕ Café Inventory Management App",
      image: cafeappImg,
      description:
        "Mobile app for café owners to track stock, suppliers, and sales in real time. Built with React Native and Firebase.",
      repo: "https://github.com/GayashiRamanayake/Code4Change.git",
      demo: null,
    },
    {
      title: "🎬 FilmDB — Local Movie Database",
      image: filmdbImg,
      description:
        "A searchable movie database with ratings and reviews. Built with React and The Movie DB API.",
      repo: "https://github.com/ICT-Courses/ict2233-ca-01-Lochini-W.git",
      demo: null,
    },
  ];

  return (
    <div className="s3 min-h-screen px-6 py-12 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
      <div className="grid sm:grid-cols-3 gap-12 max-w-5xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            ref={(el) => (projectsRef.current[index] = el)}
            className={`${styles.projectWrapper} ${styles.hide}`}
          >
            <div
              className={`${styles.bgShape} ${styles[`bg${index % 5}`]} ${
                index % 2 === 0 ? styles.tiltLeft : styles.tiltRight
              }`}
            ></div>
            <ProjectCard {...proj} />
          </div>
        ))}
      </div>
    </div>
  );
}
