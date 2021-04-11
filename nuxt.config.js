export default {

  head: {
    title: 'nuxt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },


  css: [
    '~/assets/style.css'
  ],


  plugins: [
    '~/plugins/axios'
  ],


  components: true,


  buildModules: [
  ],


  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  },


  build: {
  }
}
