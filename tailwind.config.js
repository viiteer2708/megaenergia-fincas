/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './aviso-legal.html',
    './politica-de-privacidad.html',
    './politica-de-cookies.html',
    './blog/index.html',
    './blog/*.html',
    './servicios/**/*.html',
  ],
  // Clases que el JS añade en runtime (no aparecen en el HTML estático).
  safelist: ['shadow-sm', 'py-2'],
  theme: {
    extend: {
      colors: {
        mega: {
          navy: '#1A1A2E',
          navyLight: '#2A2A4A',
          amber: '#F8AD16',
          amberHover: '#E09A10',
          teal: '#30B7BB',
          tealLight: '#E5F6F6',
          surface: '#F8FAFC',
          border: '#E2E8F0',
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -10px rgba(26, 26, 46, 0.08)',
        float: '0 20px 40px -20px rgba(0, 0, 0, 0.15)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
}
