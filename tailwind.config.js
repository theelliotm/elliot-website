/** @type {import('tailwindcss').Config} */
module.exports = {
  relative: true,
  content: ['./**/*.{html,js}', './index.html'],
  theme: {
    screens: {
      'xs': '500px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

