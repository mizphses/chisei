export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  router: {
    base: '/chisei/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '行動する知性ジェネレーター',
    htmlAttrs: {
      lang: 'jp'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'description', name: 'description', content: '行動する知性。ジェネレータ！！！（中央大学とは無関係です）' },
      { hid: 'og:site_name', property: 'og:site_name', content: '行動する知性。' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://mizphses.github.io/chisei' },
      { hid: 'og:title', property: 'og:title', content: '行動する知性。' },
      { hid: 'og:description', property: 'og:description', content: '行動する知性。ジェネレータ！！！（中央大学とは無関係です）' },
      { hid: 'og:image', property: 'og:image', content: 'https://mizphses.github.io/chisei/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/chisei/favicon.ico' }
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/google-gtag',
  ],
  'google-gtag': {
    id: 'G-T7FTJ4ZZ6C',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
