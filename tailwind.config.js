/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
        h1: '48px',
      },
      lineHeight: {
        h1: '1.2em',
      },
      borderRadius: {
        full: '100px',
      },
      backgroundColor: {
        'custom-bg': 'rgba(232, 229, 228, 0.5)',
      },
    },
    screens: {
      xl: { max: '1200px' },
      lg: { max: '1024px' },
      md: { max: '810px' },
      sm: { max: '510px' },
      xs: { max: '390px' },
      mini: { max: '350px' },
    },
  },
  plugins: [],
}
