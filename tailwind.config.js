/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      xs: "320px",
      sm: "520px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
    },
    extend: {
      screens: {
        xs: "320px",
        sm: "520px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#F58634",
        secondary: "#225FA9",
        lightblue: "#271E4A",
        serviceCard: "#EBF7FE",
        black: "#000000",
        white: "#FFFFFF",
        green: "#17A638",
        grey: "#D9D9D9",
        lightgrey: "#F2F1F1",
        inputBg: "#F3F3F3",
      },
    },
  },
  plugins: [],
};
