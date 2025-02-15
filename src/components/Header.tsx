"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-200 dark:bg-gray-900 shadow-md z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-4">
        
        {/* Logo on Left */}
        <Link href="/">
          <span className="text-xl font-bold text-blue-600 dark:text-white cursor-pointer">
            NEXT JS
          </span>
        </Link>

        {/* Right Side - Menu & Theme Toggle */}
        <div className="flex items-center space-x-6">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "About", "Team", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`}>
                <span className="relative cursor-pointer text-gray-700 dark:text-white font-medium transition-all after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full">
                  {item}
                </span>
              </Link>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-blue-600 dark:text-yellow-400 focus:outline-none"
          >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-blue-600 dark:text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Sidebar (Slide from Right) */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-gray-800 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-600 dark:text-white"
        >
          <X size={28} />
        </button>

        <div className="flex flex-col items-start space-y-6 px-6 py-20">
          {["Home", "About", "Team", "Contact"].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} onClick={() => setIsOpen(false)}>
              <span className="relative cursor-pointer text-gray-700 dark:text-white font-medium transition-all after:block after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full">
                {item}
              </span>
            </Link>
          ))}

          {/* Theme Toggle for Mobile */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="text-blue-600 dark:text-yellow-400 mt-4"
          >
            {theme === "light" ? <Moon size={28} /> : <Sun size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
