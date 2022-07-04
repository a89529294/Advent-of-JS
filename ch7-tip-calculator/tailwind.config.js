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
        "indigo-primary": "#60C1B6",
      },
      dropShadow: {
        button: "0 1px 8px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
