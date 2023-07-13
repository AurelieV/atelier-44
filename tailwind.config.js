/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        tablet: '821px'
      },
      fontFamily: {
        hand: ['Arizonia', 'cursive']
      },
      colors: {
        'blue-gray': {
          DEFAULT: 'hsl(209, 21%, 45%)'
        },
        blue: {
          DEFAULT: 'hsl(219, 48%, 15%)'
        },
        copper: {
          DEFAULT: 'hsl(27, 40%, 52%)'
        },
        brown: {
          DEFAULT: 'hsl(24, 46%, 37%)'
        },
        'light-pink': {
          DEFAULT: 'hsl(60, 2%, 88%)'
        },
        cream: {
          DEFAULT: 'hsl(60, 3%, 93%)',
          transparent: 'hsla(60, 3%, 93%, 0.8)'
        }
      }
    }
  },
  plugins: []
}
