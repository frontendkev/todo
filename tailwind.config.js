/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksandbold: ['quicksandbold', 'san-serif'],
        quicksandsemibold: ['quicksandsemibold', 'san-serif'],
        quicksandlight: ['quicksandlight', 'san-serif'],
        quicksandregular: ['quicksandregular', 'san-serif']
      },
      boxShadow: {
        'ghost': ' -0.1em -0.1em 0.1em rgb(100, 100, 100, 0.3)',
        'light': '0em -0em 0.3em 0.2em rgb(100, 100, 100, 0.3)',
        'dark': '0em -0em 0.3em 0.2em rgb(100, 100, 100, 0.8)',
        'bottom': '0em 0.1em 0em 0em rgb(100, 100, 100, 0.3)',
      },
      backgroundColor: {
        'mygray': '#11141b',
        'mynavyblue': '#010413'
      },
      colors: {
        'mygray': '#11141b',
        'mynavyblue': '#010413'
      }
    },
  },
  plugins: [],
}
