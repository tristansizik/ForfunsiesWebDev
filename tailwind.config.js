/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,html,tsx}",
    "./src/components/**/*.{js,html,tsx}"
  ],
  theme: {
    fontSize: {
      sm: '0.85rem'
    },
    fontFamily: {
      'mono' : ['ui-monospace', 'Menlo', 'Monaco', 'Cascadia Mono', 'Segoe UI Mono',
      'Roboto Mono', 'Oxygen Mono', 'Ubuntu Monospace', 'Source Code Pro',
      'Fira Mono', 'Droid Sans Mono', 'Courier New', 'monospace'],
    },
    backgroundColor: {
      'white-1' : '#EEF0F1',

    },
    borderColor: {
      'brown-1' : '#ACAFB0',
    },
    borderRadius: {
      '12px' : '12px',
    },
    extend: {
      maxWidth: {
        '1100px' : '1100px',
      },
      zIndex: {
        '2': '2',
      },
      gridTemplateColumns: {
        '4.25a' : 'repeat(4, minmax(25%, auto))'
      },
      width: {
        '1100px' : '1100px'
      },
    },
  },
  plugins: [],
}
