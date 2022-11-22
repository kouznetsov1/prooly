/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
