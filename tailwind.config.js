/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,html,tsx}",
    "./src/components/**/*.{js,html,tsx}"
  ],
  theme: {   
    borderColor: {
      'brown-1' : '#ACAFB0',
    },
    fontFamily: {
      Saira: ["Saira","sans-serif"],
      Hardigan: ["Hardigan"],
    },
    extend: {      
      colors: {
        'red-cedar-chest' : '#dea5a4',
        'green-dark'  : '#215a5b',
        'brown-pastel' : '#d7a29a',
        'blue-pastel' : '#8EA6CA',
        'faint-grey' : '#8CC46A',
        'green-blueish-dark' : '#167E00',
        'neon-green' : 'var(--neon-green)',
        'rusty-black' : 'var(--rusty-black)',
        'coral' : "#de9151",
        'vivid-red' : "#f34213",
        'dark-grayish-blue' : '#2e2e3a',

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
        '70%' : '70%',
      },
      height: {
        '50%' : '50vh',
      },
      minHeight:{
        '1/2' : '50vh',
        '3/4' : '75vh',
      },
      inset: {
        '10%' : '10%',
        '30%' : '30%',
        '5%'  : '5%',
        '3%'  : '3%',
        '1%'  : '1%',
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
