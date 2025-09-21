import { Link, NavLink } from "react-router-dom"

export default function Nav() {
  const linkClass =
    "px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <Link to="/" className="text-2xl font-bold text-primary">
            MyPortfolio
          </Link>

          {/* Nav Links */}
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "bg-primary text-white" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "bg-primary text-white" : ""}`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "bg-primary text-white" : ""}`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? "bg-primary text-white" : ""}`
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
