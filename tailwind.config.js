/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "375px",
      xs: "425px",
      xls: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // ---------------------------
        // Old Colors Naming for reference
        // ---------------------------
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
        // ---------------------------
        // New Colors Naming
        // ---------------------------
        "primary-white": "#FFFFFF",
        "primary-black": "#0B0B0B",
        "primary-purple": "#251B37",
        "primary-darkblue": "#0D062D",
        "secondary-purple": "#5B4C83",
        "secondary-pink": "#FF375E",

        "lite-white": "#F6F6F6",
        "lite-purple": "#E9E3D5",
        "lite-purple-54": "#E9E3D58A",
        "icon-text": "#787486",
        "primary-p": "#787486",

        "add-btn-pink-bg-20": "#FF375E33",
        "add-btn-pink-text": "#FF375E",
        "add-btn-purple-bg-20": "#251B3733",
        "add-btn-purple-text": "#251B37",
        "edit-btn-text": "#0D062D",

        "priority-low-bg-20": "#DFA87433",
        "priority-low-text": "#D58D49",
        "priority-high-bg-10": "#D8727D1A",
        "priority-high-text": "#D8727D",
        "priority-completed-bg-20": "#83C29D33",
        "priority-completed-text": "#68B266",

        "overlay-title-text": "#251B37",
        "overlay-primary-text": "#0D062D",
        "overlay-number-bg": "#E0CEFF",
        "overlay-number-text": "#251B37",
        "overlay-comment-bg": "#F2EBFE",
        "overlay-comment-text": "#414141",
        "overlay-comment-edit-text": "#251B37",
        "overlay-comment-delete-text": "#BD0021",
        "overlay-role-text": "#3F3C3D",

        "gradient-purple-btn-bg":
        "linear-gradient(260.02deg, #5A28B3 -16.1%, #E2778C 173.02%)",
        "gradient-purple-progress-fill":
        "linear-gradient(90deg, rgba(93, 28, 210, 0.99) 0%, #FF375E 201.9%)",
        "gradient-purple-progress-container-32": "#A3908452",

        "nav-selected-bg": "#322746",
        "nav-selected-text": "#D7C843",
        "erp-community-container-bg": "#5B4C83",
        "erp-community-selected-bg": "#B6A6D3",

        "mytasks-number-bg": "#E0E0E0",
        "mytasks-number-text": "#625F6D",
        "mytasks-dotline-todo": "#251B37",
        "mytasks-dotline-inprogress": "#EE681D",
        "mytasks-dotline-done": "#8BC48A",

        "edittask-status-notselected-text-44": "#0D062D70",
      },
      width: {
        half: "50vw",
      },
    },
  },
  plugins: [],
};
