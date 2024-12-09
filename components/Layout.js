import { useState, useEffect } from 'react';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Save dark mode preference in localStorage
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
    document.documentElement.classList.toggle('dark', storedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('darkMode', newMode); // Persist preference
  };

  return (
    <div>
      <header className="p-4 flex justify-between items-center shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-xl font-bold text-ocean-dark dark:text-ocean-light">Jordan Jones</h1>
        <nav className="flex space-x-6">
          <a href="#about" className="hover:text-ocean-dark dark:hover:text-ocean-light transition">
            About Me
          </a>
          <a href="#projects" className="hover:text-ocean-dark dark:hover:text-ocean-light transition">
            Projects
          </a>
          <a href="#skills" className="hover:text-ocean-dark dark:hover:text-ocean-light transition">
            Skills
          </a>
          <a href="#contact" className="hover:text-ocean-dark dark:hover:text-ocean-light transition">
            Contact
          </a>
        </nav>
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:shadow-lg transition"
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </header>
      <main>{children}</main>
    </div>
  );
}
