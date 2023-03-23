/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 'components/**/*.vue', 'app.vue', 'pages/**/*.vue', 'src/tagColorMap.js'],
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
        }
      }
    },
  },
  plugins: [],
}
