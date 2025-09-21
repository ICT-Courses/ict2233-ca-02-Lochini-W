import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12">
      <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Introduction */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="leading-relaxed">
            Hi, I’m Lochini, a passionate web developer building responsive
            and modern web applications. I enjoy learning new technologies and
            solving real-world problems through code.
          </p>
        </section>

        {/* Education */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <ul className="space-y-4">
            <li>
              🎓 <span className="font-bold">[Degree]</span> — [University Name]
              <p className="text-sm text-gray-600 dark:text-gray-400">
                [Year – Year]
              </p>
            </li>
          </ul>
        </section>

        {/* Skills */}
        <section className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">HTML</span>
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">CSS</span>
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">JavaScript</span>
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">React</span>
            <span className="px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-center">TailwindCSS</span>
          </div>
        </section>
      </div>
    </div>
  );
}
