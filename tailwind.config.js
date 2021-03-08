const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      purple: colors.purple,
      green: colors.green,
      orange: colors.orange,
      indigo: colors.indigo,
      amber: colors.amber,
      lime : colors.lime,
      teal : colors.teal,
      emerald : colors.emerald,
      cyan : colors.cyan,
      lightBlue : colors.lightBlue,
      violet : colors.violet,
      fuchsia: colors.fuchsia,
      rose: colors.fuchsia,
      blueGray : colors.blueGray,
      coolGray: colors.coolGray,
    },
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out",
      }
    },
    fontFamily: {
      body: ['Poppins']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
