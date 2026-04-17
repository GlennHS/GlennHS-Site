// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      blogCollection: 'live',
      availableForHire: true,
      isMaintenance: false
    }
  },

  app: {
    head: {
      link: [
        { rel: 'icon', href: '/favicon.png' }
      ],
      // script: [
      //   { "data-id":"101453603", "src":"//static.getclicky.com/js", async: true }
      // ],
    }
  },

  modules: [
    '@nuxt/content'
  ],

  content: {
    build: {
      markdown: {
        toc: {
          depth: 3, // include h3 headings
        }
      }
    }
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
  }
})