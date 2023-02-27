/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        baseDark: "#222222",
        lightGray: "#555555",
        grayishWhite: "#FFFFFF",
        validationRed: "#A3270C",
        cardBackground: "#F7F7F7",
        itemEven: "#EDEDED",
      },
      fontFamily: {
        sans: '"Roboto", sans-serif',
      },
    },
    screens: {
      "sm-mobile": "320px",
      mobile: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
