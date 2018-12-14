module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  abc: {
      baseUrl: process.env.NODE_ENV === 'production1'

  },

------------------------------


  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  productionSourceMap: false
}