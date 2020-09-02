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
/* 	configureWebpack: (config) => {
		return {
			devServer: {
				proxy: {
					'/rout': {
						target: 'http://0.0.0.0:3000',
						secure: false,
						changeOrigin: true

					}
				}
			}
		}
	} */
}