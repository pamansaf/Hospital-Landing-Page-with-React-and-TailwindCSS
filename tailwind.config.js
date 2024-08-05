/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#FFC000",
        hoverColor2: "#0d9488",
        brightColor: "#dd8036",
        backgroundColor: "#36ae9a",
        backgroundColor2: "#f0fdfa",
      },
    },
  },
  plugins: [],
};
