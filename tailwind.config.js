/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      "main": "#1E202E",
      "main-second": "#0b409c",
      "main-third": "#0f1465",
      "bright": "#f2f7ff"
      },
    },
  },
  plugins: [],
}