/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'placeholder': '#595D62',
        'active': '#4d46b488',
        'primary': '#162D3A'
      },
      backgroundColor: {
        'primary': '#162D3A'
      },
      fontFamily: {
        'primary': ['OpenSans', 'sans-serif']
      },
      borderColor: {
        'primary': '#E2E2E2'
      }
    },
  },
  plugins: [],
}

