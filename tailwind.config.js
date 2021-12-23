const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [],
  purge: [ './src/**/*.html', './src/**/*.vue', './src/**/*.jsx', ],
  theme: {
    ...defaultTheme,
    colors: {
      sky: {
        800: '#2C4664',
        900: '#21364e',
      },
      slate: {
        50: '#FFFFFF7E'
      },
      white: '#ffffff',
      lime: {
        300: '#C8FF8C'
      },
      cyan: {
        200: '#EDF1F5'
      },
      gray: {
        200: '#b2b4b7',
        300: '#909294',
        500: '#96a3b2',
      }
    },
    extend: {
      width: {
        '1/8': '12.5%'
      }
    },
  },
  plugins: [],
}
