/** @type {import('tailwindcss').Config} */
export default {
content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
   extend: {
       fontSize: {
         base: '18px', // Increase this value to make all text larger
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

