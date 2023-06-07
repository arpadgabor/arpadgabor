export default {
  target: 'static',

  head: {
    title: 'Hello there!',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Urbanist:ital,wght@0,300;0,500;0,700;1,300;1,500;1,700&display=swap',
      },
    ],
  },

  css: ['~/assets/main.css'],

  plugins: [],

  components: false,

  buildModules: [
    ['@nuxt/typescript-build', { typeCheck: false }],
    '@nuxtjs/composition-api/module',
    'unplugin-vue2-script-setup/nuxt',
    'nuxt-windicss',
    '@nuxtjs/color-mode',
  ],

  modules: ['@nuxt/content'],

  content: {},
  colorMode: {
    preference: 'system',
    classSuffix: '',
  },

  build: {},
}
