/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#2B2A30",
      },
      backgroundImage: {
        "inner-circle-dark":
          "radial-gradient(71.4% 71.4% at 51.7% 28.6%, #3A393F 0%, #17171A 100%)",
      },
      boxShadow: {
        "outer-circle":
          "-5px 14px 44px #000000, 5px -16px 50px rgba(255, 255, 255, 0.15)",
        "inner-circle": "inset 0px 0px 114px rgba(0, 0, 0, 0.45)",
      },
      fontFamily: {
        bebas: ["bebas", defaultTheme.fontFamily.serif],
        montserrat: ["montserrat", defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
