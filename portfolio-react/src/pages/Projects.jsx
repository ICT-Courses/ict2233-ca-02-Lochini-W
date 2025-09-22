import React, { useEffect, useRef } from "react";
import tidytailImg from "../assets/images/tidytail.jpg";
import cafeappImg from "../assets/images/cafeapp.jpg";
import filmdbImg from "../assets/images/filmDBicon.jpg";
import "./Projects.css";


export default function Projects() {
  const projectsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-6");
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
      link: "#", // placeholder link
    },
    {
      title: "☕ Café Inventory Management App",
      image: cafeappImg,
      link: "#", // placeholder link
    },
    {
      title: "🎬 FilmDB — Local Movie Database",
      image: filmdbImg, // replace with your own screenshot
      link: "#", // placeholder link
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (projectsRef.current[index] = el)}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden transform transition duration-700 ease-out hover:scale-105 hover:shadow-xl opacity-0 translate-y-6"
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
                className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition "
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
