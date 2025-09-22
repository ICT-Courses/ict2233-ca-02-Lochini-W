import React, { useEffect, useRef } from "react";
import styles from "./About.module.css";

export default function About() {
  const sectionsRef = useRef([]);

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
      { threshold: 0.3 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      {/* Page Header */}
      <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Introduction */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transform transition duration-700 ease-out hover:scale-105 hover:shadow-xl ${styles.hide}`}
        >
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="leading-relaxed">
            Hi, I’m [Your Name], a passionate web developer with experience in
            building responsive and modern web applications. I enjoy learning
            new technologies and solving real-world problems through code. My
            goal is to create inspiring and useful projects that help people
            embrace creativity even in a tech-savvy industry.
          </p>
        </section>

        {/* Education */}
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transform transition duration-700 ease-out hover:scale-105 hover:shadow-xl ${styles.hide}`}
        >
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <ul className="space-y-4">
            <li>
              🎓 <span className="font-bold">[Degree]</span> — [University Name]
              <p className="text-sm text-gray-600 dark:text-gray-400">
                [Year – Year]
              </p>
            </li>
            <li>
              🎓 <span className="font-bold">[High School / Certification]</span>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                [Year – Year]
              </p>
            </li>
          </ul>
        </section>

        {/* Technical Skills */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transform transition duration-700 ease-out hover:scale-105 hover:shadow-xl ${styles.hide}`}
        >
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["HTML", "CSS", "JavaScript", "React", "TailwindCSS"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-center"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </section>

        {/* Soft Skills */}
        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className={`bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transform transition duration-700 ease-out hover:scale-105 hover:shadow-xl ${styles.hide}`}
        >
          <h2 className="text-2xl font-semibold mb-4">Soft Skills</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Teamwork & Collaboration</li>
            <li>Problem-Solving</li>
            <li>Adaptability</li>
            <li>Time Management</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
