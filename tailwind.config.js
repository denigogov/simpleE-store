/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primaryBackground: "#f3f3f356",
      titlePrimaryLight: "#9ca3af",
      titlePrimaryDark: "#4b5563",
      subTitlePrimaryLight: "#9ca3af",
      subTitlePrimaryDark: "#64748b",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      Poppins: ["Poppins", "serif"],
    },
    extend: {
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [require("rippleui")],
};
