/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'retro-white': '#fbfcfb',
        'label': '#a29797',
        'primary':'#80c890'
      }
    },
  },
  plugins: [],
}
