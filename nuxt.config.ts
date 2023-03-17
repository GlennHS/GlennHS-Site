// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: [
    '@/assets/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ]
})
