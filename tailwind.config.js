/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // `${srcDir}/components/**/*.{vue,js,ts}`,
    // `${srcDir}/layouts/**/*.vue`,
    // `${srcDir}/pages/**/*.vue`,
    // `${srcDir}/composables/**/*.{js,ts}`,
    // `${srcDir}/plugins/**/*.{js,ts}`,
    // `${srcDir}/App.{js,ts,vue}`,
    // `${srcDir}/app.{js,ts,vue}`,
    // `${srcDir}/Error.{js,ts,vue}`,
    // `${srcDir}/error.{js,ts,vue}`,
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
