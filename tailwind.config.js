/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'main': '#9a4b2c',
      },
      backgroundImage: {
        'logo': "url('/Assets/Images/logo.png')",
      },
    },
  },
  plugins: [],
};
