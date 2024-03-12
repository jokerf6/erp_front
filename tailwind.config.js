/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./functions/**/*.{js,ts,jsx,tsx,mdx}",
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
        "gradient-purple-btn": "linear-gradient(260.02deg, #5A28B3 -16.1%, #E2778C 173.02%)",
        "gradient-purple-progress": "linear-gradient(to right, #5D1CD2FC 25%, #FF375E 100%)",
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
        "secondary-purple": "#5B4C83",
        "primary-darkblue": "#0D062D",
        "primary-pink": "#FF375E",

        "lite-white": "#F6F6F6",
        "lite-purple": "#E9E3D5",
        "lite-purple-54": "#E9E3D58A",
        "icon-text": "#787486",
        "progress-container-bg-32": "#A3908452",
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

        "sider-bg-white": "#FAFAFA",
        "sider-title-text": "#251B37",
        "sider-primary-text": "#0D062D",
        "sider-number-bg": "#E0CEFF",
        "sider-number-text": "#251B37",
        "sider-comment-bg": "#F2EBFE",
        "sider-comment-text": "#414141",
        "sider-comment-edit-text": "#251B37",
        "sider-comment-delete-text": "#BD0021",
        "sider-role-text": "#3F3C3D",

        "nav-selected-bg": "#322746",
        "nav-selected-text": "#D7C843",
        "erp-community-container-bg": "#5B4C83",
        "erp-community-selected-bg": "#B6A6D3",

        "mytasks-number-bg": "#E0E0E0",
        "mytasks-number-text": "#625F6D",
        "mytasks-dotline-todo": "#251B37",
        "mytasks-dotline-inprogress": "#EE681D",
        "mytasks-dotline-done": "#8BC48A",

      },
      width: {
        half: "50vw",
      },
    },
  },
  plugins: [],
};
