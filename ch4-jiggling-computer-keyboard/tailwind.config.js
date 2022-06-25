/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#868888",
        teal: "#60C1B6",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        jiggle: "jiggle 1s ease infinite",
      },

      // 0% { transform: translate(1px, 1px) rotate(0deg); }
      // 10% { transform: translate(-1px, -2px) rotate(-1deg); }
      // 20% { transform: translate(-3px, 0px) rotate(1deg); }
      // 30% { transform: translate(3px, 2px) rotate(0deg); }
      // 40% { transform: translate(1px, -1px) rotate(1deg); }
      // 50% { transform: translate(-1px, 2px) rotate(-1deg); }
      // 60% { transform: translate(-3px, 1px) rotate(0deg); }
      // 70% { transform: translate(3px, 1px) rotate(-1deg); }
      // 80% { transform: translate(-1px, -1px) rotate(1deg); }
      // 90% { transform: translate(1px, 2px) rotate(0deg); }
      // 100% { transform: translate(1px, -2px) rotate(-1deg); }

      keyframes: {
        jiggle: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)" },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": { transform: "translate(-1px, 2px) rotate(-1deg)" },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { transform: "translate(1px, -2px) rotate(-1deg)" },
        },
      },
    },
  },
  plugins: [],
};
