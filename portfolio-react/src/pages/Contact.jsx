import React, { useState, useRef, useEffect } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const sectionsRef = useRef([]);

  // Scroll-in animation
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
      setTimeout(() => setSubmitted(false), 4000); // auto-hide success message
    } else {
      setErrors(validationErrors);
      setSubmitted(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-12 flex flex-col items-center space-y-12">
      <h1 className="text-4xl font-bold text-center">Contact Me</h1>

      {/* Contact Form */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className={`w-full max-w-lg bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md transform transition duration-700 ease-out hover:scale-105 hover:shadow-xl ${styles.hide}`}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block font-semibold mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={submitted}
            className={`w-full py-3 rounded-lg font-semibold transition ${
              submitted ? "bg-green-500 cursor-default" : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            {submitted ? "Sent!" : "Send Message"}
          </button>
        </form>
      </section>

      {/* Social Links */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className={`flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md transform transition duration-700 ease-out hover:scale-105 hover:shadow-xl ${styles.hide}`}
      >
        <a
          href="https://www.linkedin.com/in/buvaneswari-lochini-weerasinghe-296106381/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-400 font-semibold hover:underline text-center"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/Lochini-W"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 font-semibold hover:underline text-center"
        >
          GitHub
        </a>
        <a
          href="mailto:lochini.edenfields@gmail.com"
          className="text-red-600 dark:text-red-400 font-semibold hover:underline text-center"
        >
          Email
        </a>
      </section>
    </div>
  );
}
