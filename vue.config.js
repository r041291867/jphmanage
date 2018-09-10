const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  //baseUrl: "./",
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
   }
}