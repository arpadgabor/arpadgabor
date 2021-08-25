import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '0.5rem',
    },
    fontFamily: {
      sans: '"Urbanist", sans-serif',
    },

    fontWeight: {
      light: 300,
      regular: 500,
      bold: 700,
    },

    colors: {
      transparent: 'transparent',
      white: '#f2f4f7', //gray.light
      black: '#080a0d', // gray.dark
      gray: {
        light: '#f2f4f7',
        DEFAULT: '#293241',
        dark: '#101319',
        darkest: '#080a0d',
      },
      main: {
        light: '#fdf0ec',
        DEFAULT: '#ee6c4d',
        dark: '#83240c',
        darkest: '#250a03',
      },
      alt: {
        light: '#e0fbfc',
        DEFAULT: '#98c1d9',
        dark: '#3d5a80',
        darkest: '#e0fbfc',
      },
    },
  },
})
