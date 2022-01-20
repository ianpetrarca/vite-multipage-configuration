module.exports = {
  purge: [ './**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
 
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}
