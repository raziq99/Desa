/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      translate: {
        "-1/2": "-50%",
      },
      colors: {
        navbar: "#69BCB8",
        nav_hover: "#336F6C",
        button_hover: "#468585",
      },
    },
  },
  plugins: [],
};
