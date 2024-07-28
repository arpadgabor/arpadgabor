import { fontFamily, colors } from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,md,mdx,ts,tsx,vue}'],
  theme: {
    fontFamily: {
      sans: [`'Manrope'`, ...fontFamily.sans],
    },
    fontWeight: {
      bold: 600,
      normal: 400,
      light: 300,
    },
    colors: {
      dark: {
        DEFAULT: '#0e0a09',
        footer: '#55524f',
        subtle: '#84827d',
      },
      bright: '#fafaf0',
      accent: {
        DEFAULT: '#ff6600',
        border: '#cc5100',
      },
    },
    extend: {},
  },
  plugins: [],
}
