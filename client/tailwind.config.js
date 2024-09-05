/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all JS, JSX, TS, and TSX files in the src directory
    './public/index.html',        // Include your main HTML file
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-light-to-dark': 'linear-gradient(to bottom, #e0e0e0, #333333)', // Light to dark gradient
      },
      fontFamily: {
        // Add your custom font here
        'custom': ['YourCustomFont', 'sans-serif'], // Replace 'YourCustomFont' with the actual font name
      },
    },
  },
  plugins: [],
};
