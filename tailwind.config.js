/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable dark mode using the class strategy
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xm': '350px', // Small screens (mobile)
        'sm': '640px', // Small screens (mobile)
        'md': '768px', // Medium screens (tablets)
        'lg': '1024px', // Large screens (desktops)
        'xl': '1280px', // Extra large screens
      },
      colors: {
        primary: '#93b1a6',
        'primary-light': 'rgba(147, 177, 166, 0.4)',
        'primary-light-2': 'rgba(147, 177, 166, 0.7)',
        secondary: '#056b79',
        'secondary-light': 'rgba(9, 42, 104, 0.9)',
        white: '#EAF2EF',
        black: '#222222',
      },
      boxShadow: {
        'custom': '0px 8px 24px rgba(149, 157, 165, 0.2)',
      },
      borderRadius: {
        'large': '25px',
      },
      minHeight: {
        'screen-80': '80vh',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}
