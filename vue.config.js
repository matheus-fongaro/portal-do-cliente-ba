const webpack = require('webpack')
module.exports = {
  publicPath: '/',

  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      new webpack.ProvidePlugin({
        mapboxgl: 'mapbox-gl'
      })
    ],
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.common.js',
        'jquery': 'jquery/src/jquery.js'
      }
    }
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Portal do Cliente';
        return args;
      });
  },
}
