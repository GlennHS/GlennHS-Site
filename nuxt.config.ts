// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      contentRoot: '/'
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.png' }
      ]
    }
  },
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  css: [
    '@/assets/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  // https://stackoverflow.com/a/74999711/18073437
  build: {
    transpile: [
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-regular-svg-icons',
      '@fortawesome/free-brands-svg-icons',
      '@fortawesome/vue-fontawesome'
    ]
  },
})
