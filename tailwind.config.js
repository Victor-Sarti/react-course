/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },


    extend: {},
    colors: {
      "blue-facebook": '#1877f2',
      "gray-facebook": '#F0F2F5',
      "green-facebook": '#36A420',
      "white-facebook": '#FFFFFF',
      
      "gray-custum": '#f7fafc',
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',

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