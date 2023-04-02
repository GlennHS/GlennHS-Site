/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'app.vue',
    'error.vue',
    'components/**/*.vue',
    'pages/**/*.vue',
    'content/**/*.md',
    'src/tagColorMap.js',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          'DEFAULT': '#090446',
          '100': '#9D9BB5',
          '200': '#534F7E',
          '300': '#474374',
          '400': '#3A366B',
          '500': '#2E2A62',
          '600': '#221D59',
          '700': '#15114F',
          '800': '#070335',
          '900': '#05022A',
        },
        "sky": '#60a5fa'
      }
    },
  }
}
