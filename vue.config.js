module.exports = {
	filenameHashing: false,
	productionSourceMap: false,
	publicPath: '/', // tmp, real = /,
	chainWebpack: config => {
		config.plugin('html').tap(options => {
			options[0].minify = false;
			return options;
		});
	},
	configureWebpack: (config) => {
		return {
			devServer: {
				proxy: {
					'/vue-advanced-api-l3': {
						target: 'http://faceprog.ru',
						secure: false,
						changeOrigin: true

					}
				}
			}
		}
	} 
}