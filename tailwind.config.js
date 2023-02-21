const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: {
        100: "#202a3c",
        200: "#1c2431",
        300: "#181f2a",
      },
      white: colors.white,
      gray: colors.gray,
      cyan: colors.cyan,
    },
    fontFamily: {
      "open-sans": ["Open Sans", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
  },
  plugins: [],
};
