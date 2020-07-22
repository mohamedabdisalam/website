export default {
  telemetry: false,
  components: true,
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Somalis in tech 💻 🐪',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'All things tech 💻 all things Somali 🐪' // need some SEO here
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/styles/scss/global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      // Sets webpack's mode to development if `isDev` is true.
      if (isDev) {
        config.mode = 'development';
      }
      // optimise chunk
      if (isClient) {
        config.optimization.splitChunks.maxSize = 200000;
      }
    }
  },
  pwa: {
    meta: {
      name: 'Somalis in tech 💻 🐪',
      description: 'All things tech 💻 all things Somali 🐪'
    },
    manifest: {
      name: 'Somalis in tech 💻 🐪',
      title: 'Somalis in tech 💻 🐪',
      description: 'All things tech 💻 all things Somali 🐪',
      short_name: 'SiT',
      background_color: '#f8da30',
      theme_color: '#f8da30'
    }
  }
};
