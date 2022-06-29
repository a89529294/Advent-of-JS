/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "source-sans-pro": ["'Source Sans Pro'", "sans-serif"],
      },
      colors: {
        "pink-primary": "#EA346F",
      },
      backgroundImage: {
        "glowing-thumb":
          "radial-gradient(circle, rgba(234, 52, 111, 1) 0%, rgba(234, 52, 111, 1) 50%, rgba(234, 52, 111, 0.2) 50%,rgba(234, 52, 111, 0.2) 100%);",
      },
      width: {
        "variable-width": "var(--occupied-track-length)",
      },
      height: {
        track: "13.6px",
      },
      borderRadius: {
        track: "10px",
      },
      spacing: {
        "variable-margin": "var(--adjustable-margin)",
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
