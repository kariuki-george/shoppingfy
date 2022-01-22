const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: "576px",
      lg: "800px",
    },
    extend: {
      colors: {
        icon: { gray: "#454545" },
        text: {
          gray: "#828282",
        },
        heading: {
          gray: "#34333A",
        },
        modal: {
          purple: "#80485B",
          bg: "#FFF0DE",
        },
        background: {
          white: " #FAFAFE",
        },
        yellow: { global: "#F9A109" },
        blue: { global: " #56CCF2" },
        red: { global: "#EB5757" },
      },
      text: [],
    },
  },
  fontFamily: {
    noto: ["Noto Sans", "Helvetica", "Arial", "sans-serif"],
  },

  plugins: [require("daisyui")],
};
