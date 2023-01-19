/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": { transform: "translateY(500px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        appear: "appear 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
