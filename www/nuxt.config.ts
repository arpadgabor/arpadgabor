// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  nitro: {
    preset: 'aws-lambda',
  },

  modules: [
    'nuxt-content-twoslash',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    '@nuxt/icon',
  ],
  css: ['assets/twoslash.css'],

  fonts: {
    google: {
      Manrope: true,
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },

  content: {
    highlight: {
      langs: ['ts'],
      theme: 'tokyo-night',
    },
  },
  twoslash: {
    includeNuxtTypes: true,
    throws: false,
  },
  typescript: {
    tsConfig: {
      include: ['../../.sst/platform/config.d.ts'],
    },
  },
  build: { transpile: ['shiki'] },
})
