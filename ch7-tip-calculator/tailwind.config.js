/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        roboto: ["'Roboto Mono'", "monospace"],
      },
      colors: {
        "black-primary": "#333333",
      },
    },
  },
  plugins: [],
};
