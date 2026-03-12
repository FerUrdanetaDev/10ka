/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Ahora puedes usar 'font-akony' y 'font-fraktion' en tus clases
        akony: ['AKONY', 'sans-serif'],
        fraktion: ['Fraktion', 'monospace'],
      },
    },
  },
  plugins: [],
}