/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        carro: "fadeIn-carrito 700ms ease-in-out both",
      },
      keyframes: {
        "fadeIn-carrito": {
          from: {
            opacity: 0,
            transform: "translate(200px,0) scale(0.5)",
          },
          to: {
            opacity: 1,
            transform: "translate(0,0) scale(1)",
          },
        },
      },
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
