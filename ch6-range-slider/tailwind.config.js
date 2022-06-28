/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "source-sans-pro": ["'Source Sans Pro'", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("track", [
        "&::-webkit-slider-runnable-track",
        "&::-moz-range-track",
      ]);
      addVariant("thumb", ["&::-webkit-slider-thumb", "&::-moz-range-thumb"]);
    }),
  ],
};
