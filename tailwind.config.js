module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        black: '#1E1F1F',
        white: '#FCFCFC',
        snow: '#E8ECEE',
        onyx: '#3C3E3E',
        raisin: '#242E33',
        primary: '#e22866',
        primaryDark: '#af1e4e',
        secondary: '#005b93',
        tertiary: '#F6F3F7',
      },
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}