/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradi+00",
      
      },
      colors:{
        main:"#001524",
        orange:"#ffb000"
      },
      width:{
        "w-500":"500px",
        "w-400":"400px",
        "w-300":"300px",
        "w-200":"200px",
        "w-100":"100px",
      },
      height:{
        "h-500":"500px",
        "h-400":"400px",
        "h-300":"300px",
        "h-200":"200px",
        "h-100":"100px",
      }
    },
  },
  plugins: [],
};
