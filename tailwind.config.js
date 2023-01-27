module.exports = {
  darkMode: 'class',
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        black: '#1E1F1F',
        white: '#FCFCFC',
        snow: '#FDF8FA',
        onyx: '#3C3E3E',
        raisin: '#1F292E',
        primary: '#E22866',
        secondary: '#28a4e2',
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