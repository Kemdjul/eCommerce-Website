/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Jost', 'sans-serif'],
      },

      colors: {
        'primary': '#23A455',
        'crna': '#000000',
        'plava': '#131de4',
      },
    },
  },
  plugins: [],
}
