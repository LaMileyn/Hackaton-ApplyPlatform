/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: {
        300: '#304EAD',
        500: '#3557C4',
        700: '#1C3177',
      },
      secondary: {
        300: '#DE6E71',
        500: '#DA5155',
        700: '#CC4B4C',
      },
      success: '#7CC91A',
      grade: '#F6BA21',
      system: {
        100: '#FFFFFF',
        200: '#F8F8F8',
        300: '#E7EAEE',
        '300-b': '#CED9DF',
        600: '#707070',
        900: '#040404',
      },
    },
    extend: {},
  },
  plugins: [],
};
