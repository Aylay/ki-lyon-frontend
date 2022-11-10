// eslint-disable-next-line nuxt/no-cjs-in-config
const axios = require('axios')
const urlExclude = [
  
]

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: {
      lang: 'fr',
      dir: 'ltr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'locale', property: 'og:locale', content: 'fr_FR'},
      { hid: 'type', property: 'og:type', content: 'website'},
      { hid: 'site_name', property: 'og:site_name', content: 'Imagine 2050'},
      { hid: 'twitter_card', name: 'twitter_card', content: 'summary_large_image'},
      { hid: 'robots', name:'robots', content:'noindex'}
    ],
    link: [
      { rel: 'manifest', href: 'https://imagine2050.fr/favicon/manifest.json' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes:'96x96', href: '/favicon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png', sizes:'192x192', href: '/favicon/android-icon-192x192.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'57x57', href: '/favicon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'60x60', href: '/favicon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'72x72', href: '/favicon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'76x76', href: '/favicon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'114x114', href: '/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'120x120', href: '/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'144x144', href: '/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'152x152', href: '/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes:'180x180', href: '/favicon/apple-icon-180x180.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/styles.css',
  ],

  tailwindcss: {
    mode: 'jit'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/swiper.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@nuxtjs/google-fonts'
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/svg',
    // '@nuxtjs/sitemap',
    '@nuxtjs/gtm',
    '@nuxt/image',
    '@nuxtjs/axios',
    'vue-scrollto/nuxt'
  ],

  // gtm: {
  //   id: 'AW-10785325481',
  //   scriptDefer: true
  // },

  googleFonts: {
    families: {
      Roboto: [400, 500, 900],
      'Roboto+Slab': [400, 600]
    },
    display: 'swap'
  },

  // image: {
  //   domains: ['admin.imagine2050.fr'],
  //   provider: 'static',
  // },

  axios: {
  },

  // sitemap: {
  //   path: '/sitemap.xml',
  //   gzip: true,
  //   exclude: urlExclude,
  //   hostname: process.env.SITE_URL,
  // },

  markdownit: {
    runtime: true
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
