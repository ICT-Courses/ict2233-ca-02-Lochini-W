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

    sectionsRef.current.forEach((section) => section && observer.observe(section));
    return () => sectionsRef.current.forEach((section) => section && observer.unobserve(section));
  }, []);

  // Dynamic data (for future scalability)
  const education = [
    { degree: "Bachelor of Science in Computer Science", school: "University of Sri Jayewardenepura", year: "2024 – 2027" },
    
    { degree: "Schooling", school: "Visakha Vidyalaya", year: "2009 – 2022" },
  ];

  const technicalSkills = ["HTML","CSS","JavaScript","React","TailwindCSS", "C#","SQL Server","Git","Python","Github"];

  const softSkills = ["Public Speaking", "Teamwork & Collaboration", "Problem-Solving", "Adaptability", "Time Management", , , "Conflict Resolution"];

  const additionalAchievments = [ "Public Speaking","President's Guide","Participate in All Island Poetry Recitation","Winner of Light of Asia"];

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br text-gray-800 dark:text-gray-200">
      <h1 className={`${styles.responsiveHeading} text-center font-extrabold mb-16 text-gray-900 dark:text-gray-100 dark-toggle`}>
        About Me
      </h1>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {/* Introduction */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className={`s3 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${styles.hide} md:col-span-2 flex flex-col justify-center`}
        >
          <h2 className={`${styles.responsiveSubHeading} font-bold mb-7 text-center bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark-toggle`}>
            Introduction
          </h2>
          <p className="leading-relaxed text-base sm:text-lg text-center">
            Hi, I’m Lochini, a passionate undergraduate aspiring to be a Project Manager, with experience in leading projects and building responsive, modern applications. 
            While project management is my primary focus, I am currently proficient in it and also have a strong interest in Cybersecurity. 
            I aim to broaden my skills in this area, as well as explore other fields of technology and innovation, without limiting myself to a single path. 
            I enjoy learning new tools, solving real-world problems, and creating intuitive, efficient, and impactful digital experiences.
          </p>
        </section>

        {/* Education */}
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className={`s3 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${styles.hide} flex flex-col`}
        >
          <h2 className={`${styles.responsiveSubHeading} font-bold mb-4 text-center bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark-toggle`}>
            Education
          </h2>
          <ul className="space-y-6">
            {education.map((edu, idx) => (
              <li key={idx} className="relative pl-6">
                <span className="text-indigo-500 mr-2 text-xl">🎓</span>
                <p className="font-semibold text-lg">{edu.degree}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 dark-toggle2">{edu.school}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 dark-toggle2">{edu.year}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Skills */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className={`s3 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${styles.hide}`}
        >
          <h2 className={`${styles.responsiveSubHeading} font-bold mb-4 text-center bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark-toggle`}>
            Technical Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {technicalSkills.map((skill, idx) => (
              <span
                key={idx}
                className="s1 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className={`s3 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${styles.hide}`}
        >
          <h2 className={`${styles.responsiveSubHeading} font-bold mb-4 text-center bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark-toggle`}>
            Soft Skills
          </h2>
          <ul className="space-y-2">
            {softSkills.map((skill, idx) => (
              <li key={idx} className="flex items-center">
                <span className="text-indigo-500 mr-2 text-xl">✨</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Additional Achievements */}
        <section
          ref={(el) => (sectionsRef.current[4] = el)}
          className={`s3 p-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${styles.hide}`}
        >
          <h2 className={`${styles.responsiveSubHeading} font-bold mb-4 text-center bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark-toggle`}>
            Additional Achievements
          </h2>
          <ul className="space-y-2">
            {additionalAchievments.map((item, idx) => (
              <li key={idx} className="flex items-center">
                <span className="text-indigo-500 mr-2 text-xl">✨</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>


      </div>
    </div>
  );
}
