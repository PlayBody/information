import { useState } from 'react';

export default function Layout({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-ocean-light dark:bg-ocean-dark text-gray-900 dark:text-gray-100">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Jordan Jones</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
