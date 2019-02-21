const pkg = require('./package')


module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    {src: '~assets/scss/index.scss', lang: 'scss'},
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~plugins/echarts'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    proxy: true // Can be also an object with default options
    // See https://github.com/nuxt-community/axios-module#options
  },
  proxy: {
    '/api-demo1': { 
      target: 'http://localhost:3030', 
      pathRewrite: {
        '^/api-demo1': 'demo1'
      }
    },
    '/api-demo2': { 
      target: 'http://localhost:3030', 
      pathRewrite: {
        '^/api-demo2': 'demo2'
      }
    }
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
