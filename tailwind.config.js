/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        headerBackground: '#44a7c7',
        backgroundColor: '#f4f4f4',
        buttonColor: '#3175d8',
      },
      keyframes: {
        foldingTimeslot: {
          '0%': { height: 'auto', 'margin-bottom': '1.25rem', opacity: '100%' },
          '100%': { height: '0', 'margin-bottom': '0', opacity: '0' },
        },
        spreadTimeslot: {
          '0%': { height: '0', 'margin-bottom': '0', opacity: '0' },
          '100%': {
            height: 'auto',
            'margin-bottom': '1.25rem',
            opacity: '100%',
          },
        },
        foldingDayslot: {
          '0%': { height: '100%' },
          '100%': { height: '60px' },
        },
        spreadDayslot: {
          '0%': { height: '60px' },
          '100%': { height: '100%' },
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
