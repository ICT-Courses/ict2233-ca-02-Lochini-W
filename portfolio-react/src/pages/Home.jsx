import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6">
      <h1 className="text-5xl font-bold text-center">Hi, I’m Lochini 👋</h1>
      <p className="mt-4 text-xl text-center text-gray-600 dark:text-gray-300">
        A passionate web developer
      </p>

      {/* Button linking to About page */}
      <Link
        to="/about"
        className="mt-8 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
      >
        Learn More About Me
      </Link>
    </section>
  );
}
