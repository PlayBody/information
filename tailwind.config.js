module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: '#a7e8f9',
          DEFAULT: '#0074D9',
          dark: '#003459',
        },
      },
      boxShadow: {
        subtle: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  darkMode: 'class', // Enables toggling between dark and light modes
};
