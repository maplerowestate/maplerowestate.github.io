/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#E5E3DC',
        copper: '#D4967D',
        sage: '#495A58',
        charcoal: '#303636'
      },
      fontFamily: {
        'pinyon': ['"Pinyon Script"', 'cursive'],
        'garamond': ['"EB Garamond"', 'serif']
      }
    },
  },
  plugins: []
}
