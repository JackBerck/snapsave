/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "dark-base": "#0f172a",
        "white-base": "#f1f5f9",
        primary: "#6b21a8",
      },
      fontFamily: {
        inter: "Inter",
        josefin: "Josefin Sans",
      },
    },
  },
  plugins: [],
};
