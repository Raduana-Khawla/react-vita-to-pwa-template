/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  dasyui: {
    themes: ["Light", "Dark", "Cupcake", "Cyberpunk"],
    darkTheme: "Light",
    base: true,
    utils: false,
  },
};
