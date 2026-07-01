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
          50: '#F8FBFF',
          100: '#F1F6FD',
          200: '#DDEBFA',
        },
        lime: {
          400: '#2F80ED',
          500: '#0B4A92',
        },
        slate: {
          700: '#17375E',
          800: '#0A2E63',
        },
        sage: {
          100: '#EAF3FF',
          200: '#CFE3FA',
          300: '#9FC7F2',
          400: '#2F80ED',
        },
        soft: {
          blue: '#EAF3FF',
          purple: '#F5F8FC',
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
