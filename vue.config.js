const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  baseUrl: "/jphmanage/",
  /*css : {
    // extract CSS in components into a single CSS file (only in production)
    // can also be an object of options to pass to extract-text-webpack-plugin
    extract: true,

    // Enable CSS modules for all css / pre-processor files.
    // This option does not affect *.vue files.
    modules: true,

    // enable CSS source maps?
    sourceMap: false,

    // pass custom options to pre-processor loaders. e.g. to pass options to
    // sass-loader, use { sass: { ... } }
    loaderOptions: {
      baseUrl:"../../",
      sass:{
        css: 'css-loader',
        'scss':'css-loader | sass-loader'
      }
    }
  },*/
  devServer: {
    proxy: {
      "/api": {
        target: "http://edudata.foxconn.com/ConvenienceStore/",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api' : ''
        }
      }
    }
  },
	configureWebpack: {
    resolve: {
      alias: {
				'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
			},
		}
  },
  chainWebpack: (config)=>{
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('components',resolve('src/components'))
      .set('layout',resolve('src/layout'))
      .set('base',resolve('src/base'))
      .set('static',resolve('src/static'))
   },
}