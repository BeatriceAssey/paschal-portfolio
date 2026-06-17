/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // default dark via hook
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#0a0a0a',
          gold: '#c9a84c',
          dark: '#111111',
        },
      },
      fontFamily: {
        heading: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
