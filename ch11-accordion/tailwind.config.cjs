/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["'Open Sans'", "sans-serif"],
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
      },
      colors: {
        yellow: "#FFDD00",
      },
    },
  },
  plugins: [],
};
