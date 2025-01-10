/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "screen-minus-64": "calc(100vh - 64px)",
      },
      screens: {
        xs: "320px", // Ejemplo de un nuevo breakpoint
      },
    },
  },
  plugins: [],
};
