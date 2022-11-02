/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'main': '#00b4d8',
      'submain': '#90e0ef',
      'highlight': '#023e8a',
      'ground': '#caf0f8',
    },
  },
  plugins: [require("daisyui")],
}
