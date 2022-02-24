const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'aurelion-sol': "url('/images/aurelion-sol.jpg')",
      },
      colors: {
        teal: {
          ...colors.teal,
          flashy: '#24e8cc',
        },
        blue: {
          ...colors.blue,
          760: '#2C5C94',
          850: '#2B4B74',
          1000: '#17314f',
        },
      },
      spacing: {
        '2px': '2px',
        '3p5': '0.875rem',
        '4b': '1.15rem',
        11: '2.75rem',
      },
      borderWidth: {
        3: '3px',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: '0.625rem',
      },
      height: {
        200: '50rem',
        '1/2': '50%',
      },
      maxWidth: {
        12: '3rem',
      },
      width: {
        22: '5.5rem',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
