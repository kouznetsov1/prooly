/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#065f46",
        secondary: "#059669",
        accent: "#6ee7b7",
      },
      animation: {
        wave: "wave 2s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "to, from": { transform: "translate(-50%, 0%)" },
          "50%": { transform: "translate(-50%, -20%)" },
        },
      },
    },
    plugins: [],
  },
};
