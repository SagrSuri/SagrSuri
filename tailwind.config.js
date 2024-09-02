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
        'sm': '400px', // Small screens (mobile)
        'md': '768px', // Medium screens (tablets)
        'lg': '1024px', // Large screens (desktops)
        'xl': '1280px', // Extra large screens
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
}
