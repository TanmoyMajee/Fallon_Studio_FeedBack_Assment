// tailwind.config.js
module.exports = {
  // Enable dark mode using the 'class' strategy
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this path to match your project structure
    "./public/index.html"
  ],
  theme: {
    extend: {
      // You can extend the theme here if needed
    },
  },
  plugins: [],
};
