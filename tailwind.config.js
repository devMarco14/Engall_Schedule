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
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
