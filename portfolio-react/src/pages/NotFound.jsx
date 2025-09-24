import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="s3 h-screen flex items-center justify-center bg-gradient-to-br">
      <div className="s2 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 text-center max-w-md">
        <h1 className="text-6xl font-extrabold text-gray-800 dark:text-white">404</h1>
        <p className="dark-toggle2 mt-4 text-lg text-gray-600 dark:text-gray-300">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-medium rounded-xl shadow-md transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
