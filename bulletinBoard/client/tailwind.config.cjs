const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "appear-modal": {
          "0%": { transform: "translateY(-200px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
      },
      animation: {
        "appear-modal": "appear-modal 0.3s ease-in-out",
      },
      colors: {
        navy: {
          400: "#0A1172",
        },
        green: {
          400: "#008397",
        },
      },
    },
  },
  plugins: [],
};
