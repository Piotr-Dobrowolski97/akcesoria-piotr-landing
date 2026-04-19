/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#004e92',
        secondary: '#00c6ff',
        summer: '#f59e0b',
        winter: '#2563eb',
        storage: '#059669',
        dark: '#1f2937',
        light: '#f3f4f6'
      }
    },
  },
  plugins: [],
}
