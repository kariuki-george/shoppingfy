const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "576px",
    },
    extend: {
      colors: {
        darkTheme: "#171a23",
        blue: {
          400: "#2D9CDB",

          800: "#2F80ED",
        },
        red: "#EB5757",
        gray: {
          400: "#828282",
          800: "#333333",
          600: "#4F4F4F",
          placeholder: "#BDBDBD",
          border: "#E0E0E0",
        },

        yellow: "yellow",
        black: "#000000",
        background: {
          whitesmoke: "#F2F2F2",
          white: "#FAFAFB",
          dark: "#252329",
        },
      },
    },
  },
  fontFamily: {
    noto: ["Noto Sans", "Helvetica", "Arial", "sans-serif"],
  },

  plugins: [],
};
