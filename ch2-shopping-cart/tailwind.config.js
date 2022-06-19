/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        primary: "#6B00F5",
        "menu-item-1": "rgba(122, 179, 243, 0.2)",
        "menu-item-2": "rgba(233, 121, 178, 0.2)",
        "menu-item-3": "rgba(215, 215, 249, 0.2)",
        "menu-item-4": "rgba(120, 247, 187, 0.2)",
      },
    },
  },
  plugins: [],
};
