/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        primary: "0px 5.4px 32px #453F3F",
        secondary: "0px 5.4px 27px #E8EAEF",
      },
      fontFamily: {
        primary: ["'Nunito Sans'", "sans-serif"],
      },
      backgroundImage: {
        "unchecked-checkbox": "url('/checkbox--unchecked.svg')",
        "checked-checkbox": "url('/checkbox--checked.svg')",
      },
    },
  },
  plugins: [],
};
