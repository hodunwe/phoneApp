/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 35s linear infinite',
      },
      colors: {
        customYellow: '#e09f3e',  // Add your custom color here
        customRed: '#f76c5e',
        customOrange: '#f68e5f',
        customBlue: '#586ba4',
        customNavy: '#324376',
      }
    }
  },
  plugins: [],
}