/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Panchang"', 'sans-serif'],
        heading: ['"Panchang"', 'sans-serif'],
        body: ['"Panchang"', 'sans-serif'],
        display: ['"Panchang"', 'sans-serif'],
        mono: ['"Panchang"', 'sans-serif'],
      },
      letterSpacing: {
        'tight-title': '-0.05em',
        'display': '0.36em',
        'sublabel': '0.24em',
        'pill': '0.14em',
      },
      colors: {
        brand: {
          red: '#BA2F2F',
          white: '#FEFDFD',
          black: '#040101',
        },
        gallery: {
          bg: '#FEFDFD',
          darkBg: '#000000',
          border: '#BA2F2F',
          darkBorder: '#262626',
          muted: '#737373',
          darkMuted: '#A3A3A3',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}
