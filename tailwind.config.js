/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Xenni palette
        cream: {
          50: '#FAFAF8',
          100: '#F5F5F0',
          200: '#EFEFEA',
        },
        lime: {
          400: '#CCFF00',
          500: '#BFFF00',
        },
        slate: {
          700: '#2C3E50',
          800: '#1A202C',
        },
        sage: {
          100: '#E8F5E8',
          200: '#D4EBD4',
          300: '#B8DFB8',
          400: '#9DD39D',
        },
        soft: {
          blue: '#E8EEF5',
          purple: '#F0E8F5',
        }
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Segoe UI', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '5xl': ['3.5rem', { lineHeight: '1.1' }],
      },
      spacing: {
        '18': '4.5rem',
      }
    },
  },
  plugins: [],
}
