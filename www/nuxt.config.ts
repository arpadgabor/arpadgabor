// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  nitro: {
    preset: 'aws-lambda',
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxtjs/seo',
    '@nuxt/icon',
  ],

  fonts: {
    google: {
      Manrope: true,
    },
  },

  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
})
