// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
<<<<<<< HEAD
      contentRoot: '/live',
      availableForHire: true
=======
      contentRoot: '/',
      isMaintenance: false
>>>>>>> 6c45afb4b36c4606c64b129082b3fafff2897dfe
    }
  },

  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.png' }
      ],
      script: [
        { "data-id":"101453603", "src":"//static.getclicky.com/js", async: true }
      ],
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

  compatibilityDate: '2025-02-17',
})