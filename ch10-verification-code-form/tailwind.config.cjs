/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pro: ["'Source Sans Pro'", "sans-serif"],
      },
      colors: {
        "purple-primary": "#6778E8",
      },
    },
  },
  plugins: [],
};
