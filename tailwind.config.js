/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,html,tsx}",
    "./src/components/**/*.{js,html,tsx}"
  ],
  theme: {
    fontFamily: {
      'mono' : ['ui-monospace', 'Menlo', 'Monaco', 'Cascadia Mono', 'Segoe UI Mono',
      'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
      'Fira Mono', 'Droid Sans Mono', 'Courier New', 'monospace'],
    },
    borderColor: {
      'brown-1' : '#ACAFB0',
    },
    extend: {
      colors: {
        'red-cedar-chest' : '#dea5a4',
        'green-dark'  : '#215a5b',
        'brown-pastel' : '#d7a29a',
        'blue-pastel' : '#5f8cc9',
      },
      maxWidth: {
        '1100px' : '1100px',
      },
      zIndex: {
        '2': '2',
      },
      gridTemplateColumns: {
        '4.25a' : 'repeat(4, minmax(25%, auto))',
      },
      width: {
        '1100px' : '1100px',
        '50%' : '50%',
        '25%' : '25%',
      },
      height: {
        '50%' : '50vh',
      },
      minHeight:{
        '3/4' : '75vh',
      },
      inset: {
        '10%' : '10%',
        '30%' : '30%',
        '5%'  : '5%',
        '3%'  : '3%',
      },   
      padding: {
        '1%'  : '1%',
        '3%'  : '3%',
        '5%'  : '5%',
      },
      borderRadius: {
        '12px' : '12px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },      
      keyframes: {
        'fade-in-down' : {
          '0%' : { 
            opacity : '0',
            transform : 'translateY(15px) translateX(-15px)',
          },
          '100%' : { 
            opacity : '1',
            transform : 'translateY(0px) translateX(0px)',
          },
        },
      },
      animation: {
        'fade-in-p7' : 'fade-in-down .7s ease-in',
      },
    },
  },
  plugins: [],
}
