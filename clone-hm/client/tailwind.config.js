/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "appear-modal": {
          "0%": { transform: "translateY(500px)" },
          "100%": { transform: "translateY(0px)" },
        },
        "appear-sidebar": {
          "0%": { transform: "translateX(-300px)" },
          "100%": { transform: "translateX(0px)" },
        },
        "exit-sidebar": {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-400px)" },
        },
        skeleton: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "appear-modal": "appear-modal 0.3s ease-in-out",
        "appear-sidebar": "appear-sidebar 0.3s ease-in-out",
        "exit-sidebar": "exit-sidebar 0.3s ease-in-out",
        skeleton: "skeleton 1.5s infinite",
      },
    },
  },
  plugins: [],
};
