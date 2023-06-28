/** @type {import('tailwindcss').Config} */
const colors = require("./tailwindcss/colors.js");
const screens = require("./tailwindcss/screens.js");
const { animation, keyframes } = require("./tailwindcss/animation.js");
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      antonio: ["Antonio"],
    },
    container: {
      center: true,
    },
    screens,
    extend: {
      colors,
      animation,
      keyframes,
      lineHeight: {
        15: "3.75rem", //line-height: 60px
      },
    },
  },
};


