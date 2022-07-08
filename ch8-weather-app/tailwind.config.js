/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        epimetheus: "#4DB0D3",
        "reviving-green": "#e6df95",
        "black-chasm": "#0e2e3a",
        "freezing-vapor": "#d3ebf4",
        "devil-blue": "#247490",
      },
      fontFamily: {
        "krona-one": ["'Krona One'", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      boxShadow: {
        day: "14.5px 5.27px 45px 0px rgba(32,77,92,0.7)",
      },
    },
  },
  plugins: [],
};
