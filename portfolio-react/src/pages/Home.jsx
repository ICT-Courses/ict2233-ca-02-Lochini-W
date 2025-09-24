import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import heroPhoto from "../assets/Lochini-photo.jpeg";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showPanel, setShowPanel] = useState(false);
  const panelRef = useRef(null);
  const navigate = useNavigate(); // Initialize navigate hook

  // Throttled scroll handler for better performance
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          setScrollY(currentScrollY);
          setShowPanel(currentScrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
      <div className="s3 min-h-screen bg-gradient-to-br">
      <section className="relative min-h-screen text-gray-800 dark:text-gray-200 overflow-hidden px-6 flex flex-col items-center justify-start gap-10">

        {/* Hero Image - Centered */}
        <div className="flex items-center justify-center mt-16">
          <div className="relative">
            <img
              src={heroPhoto}
              alt="Lochini"
              className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full shadow-2xl object-cover transition-transform duration-300 hover:scale-105 ring-4 ring-white dark:ring-gray-700"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-400/20 to-blue-400/20 blur-xl -z-10 animate-pulse"></div>
          </div>
        </div>

        {/* Hero Text Panel - Appears on Scroll */}
        <div
          ref={panelRef}
          className={`s1 w-full max-w-xl flex flex-col items-center justify-center p-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-700 mt-4 mb-1
 ${
            showPanel 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl p-5 font-bold mb-4 text-center bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent dark-toggle">
            Hi, I'm Lochini Weerasinghe
          </h1>
          <p className="text-lg sm:text-xl mb-6 text-center text-gray-600 dark:text-gray-300 leading-relaxed dark-toggle2">
            An undergraduate student passionate about computer science, learning through experience and building creative solutions to real-world challenges.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="s2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-semibold rounded-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)" }}
          >
            Learn More About Me
          </button>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-400/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '2s' }}></div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${showPanel ? 'opacity-0' : 'opacity-100'}`}>
          <div className="flex flex-col items-center text-gray-400 dark:text-gray-500">
            <span className="text-sm mb-2">Scroll to learn more</span>
            <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        </div>

        {/* Content to enable scrolling */}
        <div className="w-full max-w-4xl mt-8 space-y-8">
          <div className="s4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg mt-2">
            <h2 className="text-2xl font-bold mb-4 text-center">Exploring Technology and Creativity</h2>
            <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed dark-toggle2">
              Learning to build projects so that I can quench my curiosity, improve my skills, and to do my best to create creative solutions for real-world problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10 mt-7">
            <div className="s1 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Hands-on Project</h3>
              <p className="text-gray-600 dark:text-gray-300 dark-toggle2">
                Developing, designing, and programming to practice my skills and explore different technologies.
              </p>
            </div>
            <div className="s2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaborative Learning</h3>
              <p className="text-gray-600 dark:text-gray-300 dark-toggle2">
                Learning how to create great projects that are usueful together with my peers while harnessing my abilty to do coordinated work as part of a group of people.
              </p>
            </div>
            <div className="s2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Growth</h3>
              <p className="text-gray-600 dark:text-gray-300 dark-toggle2">
                Learning how to use various tools, frameworks and methodologies through personal projects, courses and experimentation.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}