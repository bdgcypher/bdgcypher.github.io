module.exports = {
  darkMode: 'class',
  purge: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        black: '#1E1F1F',
        white: '#FCFCFC',
        snow: '#FDF8FA',
        onyx: '#3C3E3E',
        raisin: '#2A2828',
        primary: '#E22866',
        secondary: '#21E4E8',
        tertiary: '#FDEDF2',

      }
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}