/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        legal: {
          primary: '#1e3a5f',
          secondary: '#2c5282',
          accent: '#4a90e2',
          dark: '#0f1922',
          light: '#f0f4f8',
        }
      }
    },
  },
  plugins: [],
}
