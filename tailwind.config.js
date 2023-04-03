/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#8A6CC8", "100": "#3C3C3C"}
      }
    },
  },
  plugins: [require('flowbite/plugin')]
}

