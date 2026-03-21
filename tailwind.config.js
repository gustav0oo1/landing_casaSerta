/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'accent-gold': '#D4AF37',
        'accent-red': '#DC3545',
      }
    },
  },
  plugins: [],
}
