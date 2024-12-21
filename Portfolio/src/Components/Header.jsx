import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink as ScrollLink } from "react-router-hash-link";
import { Menu, X, Github, Linkedin, Sun, Moon } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-black/95 dark:border-gray-700 dark:text-white dark:backdrop-blur-[5px] dark:supports-[backdrop-filter]:bg-black/90">
      <div className="container mx-auto flex h-14 items-center px-4">
        <ScrollLink to="#main" smooth className="font-bold text-lg">
          Dion Dulellari
        </ScrollLink>

        <nav className="hidden md:flex mx-6">
          <ul className="flex space-x-1">
            <li>
              <ScrollLink
                to="#technologies"
                smooth
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-gray-700 dark:focus:bg-gray-800 dark:hover:text-white dark:focus:text-white"
              >
                Technologies
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="#projects"
                smooth
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-gray-700 dark:focus:bg-gray-800 dark:hover:text-white dark:focus:text-white"
              >
                Projects
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="#contact"
                smooth
                className="inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:hover:bg-gray-700 dark:focus:bg-gray-800 dark:hover:text-white dark:focus:text-white"
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-1">
          <nav className="flex items-center space-x-1">
            <Link
              to="https://github.com/diondulellari"
              target="_blank"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              to="https://linkedin.com/in/diondulellari"
              target="_blank"
              className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={toggleTheme}
            >
              <Sun
                className={`h-4 w-4 transition-all ${
                  isDarkMode ? "rotate-0 scale-0" : "rotate-0 scale-100"
                }`}
              />
              <Moon
                className={`absolute h-4 w-4 transition-all ${
                  isDarkMode ? "rotate-0 scale-100" : "rotate-90 scale-0"
                }`}
              />
              <span className="sr-only">Toggle theme</span>
            </button>

            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors hover:bg-gray-100 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle menu</span>
            </button>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-[rgb(var(--color-border))]">
          <div className="container mx-auto py-4 px-4 space-y-1">
            <ScrollLink
              to="#technologies"
              smooth
              className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Technologies
            </ScrollLink>
            <ScrollLink
              to="#projects"
              smooth
              className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </ScrollLink>
            <ScrollLink
              to="#contact"
              smooth
              className="block px-4 py-2 text-sm rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </ScrollLink>
          </div>
        </nav>
      )}
    </header>
  );
};
export default Header;
