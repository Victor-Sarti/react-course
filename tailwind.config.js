/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {},
    colors: {
      "blue-facebook": '#1877f2',
      "gray-facebook": '#F0F2F5',
      "green-facebook": '#36A420',
      "white-facebook": '#FFFFFF',
      "gray-custum": '#f7fafc',

    },
    spacing:{
      '580': '580px',
      '380': '380px',
      '8': '8px',
      '45': '45px',

    },
  },
  plugins: [],
}