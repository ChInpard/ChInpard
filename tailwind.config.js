/** @type {import('tailwindcss').Config} */

const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_500 = { ...Array.from(Array(501)).map((_, i) => `${i}px`) };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: px0_500,
      fontSize: px0_100,
      width: px0_500,
      height: px0_500,
      translate: {
        '-1/2': '-50%',
      },
      colors: {
        primary: '#3182f6',
        white: '#FFFFFF',
        gray1: '#F9FAFB',
        gray2: '#B0B8C1',
        gray3: '#D1D6DB',
        gray4: '#333D4B'
      },
    },
  },
  plugins: [],
};