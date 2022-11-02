/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container:{
        screens:{
          xs: "375px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",
          "2xl": "1140px",
        },
      },
      colors:{
        primary: "#2b2b2b",
        secondary: "#02aff3",
        tertiary: "#f8f9fc",
      },
    },
  },
  plugins: [],
}