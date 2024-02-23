/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xxs': '375px',
      'xs': '425px',
      'xls':'475px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#251B37",
        white2: "#F6F6F6",
        primary2: "#FF375E",
        dark: "#251B37",
        cgrey: "#F6F6F6",
        main3: "#5B4C83",
        cat: "#E9E3D58A",
        light: "#B6A6D3",
        selected: "#322746",
        text: "#767676",
        selectedText: "#D7C843",
        tot: "#D58D49",
        bot: "#DFA87433",
        brief: "#787486",
        statusOrange: "#EE681D",
        statusGreen: "#8BC48A",
      },
      width: {
        half: "50vw",
      }
    },
  },
  plugins: [],
};
