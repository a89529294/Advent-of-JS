/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#868888",
        teal: "#60C1B6",
      },
    },
  },
  plugins: [],
};
