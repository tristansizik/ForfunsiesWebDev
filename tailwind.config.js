/** @type {import('tailwindcss').Config} */
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
      inset: {
        '10%' : '10%',
        '30%' : '30%',
        '5%'  : '5%',
      },   
      borderRadius: {
        '12px' : '12px',
      },
    },
  },
  plugins: [],
}
