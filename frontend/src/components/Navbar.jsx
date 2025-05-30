import React from "react";
import { Link } from "@heroui/react";

export default function App() {

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-slate-900 dark:text-white">
            Portfolio
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#home"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              underline="hover"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              underline="hover"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              underline="hover"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
              underline="hover"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
