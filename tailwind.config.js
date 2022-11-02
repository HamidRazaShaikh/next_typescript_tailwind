/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],

    },

    

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },


    extend: {

      backgroundImage: {
        'backImage': "url('./img/img.jpg')",
      },


      colors: {
        primary: "#5c6ac4",
        secondary: "#ecc94b",

        blue: {
          100: "#8b5cf6",
          200: "#4338ca",
        },

        red: {
          100: "#fb7185",
          200: "#f43f5e",
        },

        green : {
          100: "#2dd4bf",
          200: "#14b8a6",
        },

        dark : {

          100 : '#d1d5db',
          200: '#9ca3af'
        },


        gray: {
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
        },
      },
    },
  },
  plugins: [],
};
