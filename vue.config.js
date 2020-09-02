module.exports = {
	filenameHashing: false,
	productionSourceMap: false,
	publicPath: '/', // tmp, real = /,
	chainWebpack: config => {
		config.plugin('html').tap(options => {
			options[0].minify = false;
			return options;
		});
	} 
}