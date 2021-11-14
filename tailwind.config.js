module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      spartan: ['Spartan', 'sans-serif'],
    },
    colors: {
      primary: 'var(--color-primary-bg)',
      primaryLight: 'var(--color-primary-light)',
      fontPrimary: 'var(--font-primary)',
      fontSecondary: 'var(--font-secondary)',
      blue: {
        100: '#DFE3FA',
        300: '#9277FF',
        500: '#7C5DFA',
        600: '#7E88C3',
      },
      dark: {
        100: '#252945',
        200: '#373B53',
        300: '#1E2139',
        400: '#141625',
        900: '#0C0E16',
      },
      white: '#FFFFFF',
      light: '#F8F8F8',
      lightBlue: '#F9FAFE',
      gray: '#888EB0',
      red: {
        100: '#FF9797',
        500: '#EC5757',
      },
      green: '#33D69F',
      orange: '#FF8F00',
    },
    extend: {},
  },
  variants: {
    extend: {
      height: ["responsive", "hover", "focus", "group-hover"],
      width: ["responsive", "hover", "focus", "group-hover"],
      ringWidth: ["responsive", "hover", "focus", "group-hover"]
    },
  },
  plugins: [],
}
