/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {},

    fontFamily: {
      heading: ["Poppins", "sans-serif"],
      sans: ["Noto Sans", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    darkMode: false,
    themes: [
      {
        mytheme: {
          primary: "#000000",
          secondary: "#FFFFFF",
          // accent: "#276EF1",
          accent: "#f41e1e",
          // accent: "#572DF8",
          // neutral: "#f3f4f6",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#03703C",
          warning: "#FFC043",
          error: "#E11900",
          "--btn-text-case": "capitalize",
        },
      },
      "light",
    ],
    base: true,
    utils: true,
    logs: true,
  },
};
