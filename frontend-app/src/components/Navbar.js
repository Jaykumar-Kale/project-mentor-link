import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`p-4 shadow-md ${darkMode ? "bg-gray-900 text-white" : "bg-blue-600 text-white"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold">MentorLink</Link>

        {/* Menu for Large Screens */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
          <li><Link to="/mentors" className="hover:underline">Mentors</Link></li>
          <li><Link to="/mentees" className="hover:underline">Mentees</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
        </ul>

        {/* Dark Mode & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button onClick={toggleDarkMode}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-700 text-white p-4 space-y-3">
          <li><Link to="/dashboard" onClick={toggleMenu}>Dashboard</Link></li>
          <li><Link to="/mentors" onClick={toggleMenu}>Mentors</Link></li>
          <li><Link to="/mentees" onClick={toggleMenu}>Mentees</Link></li>
          <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
