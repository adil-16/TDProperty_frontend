/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFAA45",
        secondary: "#001749",
        success: "#28C76F",
        danger: "#F1416C",
        bloodred: "#DC3545",
        lightgray: "#EAE9E9",
        darkgray: "#959595",
        themetext: "#5E5873",
        thememutedtext: "#B9B9C3",
        themetableheader: "#F3F2F7",
      },
      fontFamily: {
        manrope: ["Manrope", ...fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: [
      {
        primary: "#FFAA45",
        secondary: "#001749",
        lightgray: "#EAE9E9",
        darkgray: "#959595",
      },
    ],
  },
  plugins: [require("daisyui")],
};
