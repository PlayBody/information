module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: '#7FDBFF',
          DEFAULT: '#0074D9',
          dark: '#001F3F',
        },
      },
    },
  },
  darkMode: 'class', // Enable dark mode
};
