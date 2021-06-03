export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  ssr: false,
  router: {
    base: '/chisei/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'chisei',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'description', name: 'description', content: '行動する知性。ジェネレータ！！！' },
      { hid: 'og:site_name', property: 'og:site_name', content: '行動する知性。' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://mizphses.github.io/chisei' },
      { hid: 'og:title', property: 'og:title', content: '行動する知性。' },
      { hid: 'og:description', property: 'og:description', content: '行動する知性。' },
      { hid: 'og:image', property: 'og:image', content: 'https://mizphses.github.io/chisei/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/chisei/favicon.ico' }
    ],
    script: [
      { tyle: "text/javascript", src: "//typesquare.com/3/tsst/script/ja/typesquare.js?5ff6acfe3d584e62aab52866e90393a3", charset: "utf-8" }
    ]
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
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
