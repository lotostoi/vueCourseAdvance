const isServer = process.argv.includes('--server');

let chainWebpack = isServer ?
	config => {
		config.plugins.delete('html');
		config.plugins.delete('preload');
		config.plugins.delete('prefetch');
	} : 
	config => {
		config.plugin('html').tap(options => {
			options[0].minify = false
			return options;
		});
	};

let configureWebpack = isServer ?
	{
		entry: { app: './src/entry-server.js' },
		output: { filename: 'js/server-bundle.js', libraryExport: 'default', libraryTarget: 'commonjs2' },
		optimization: { splitChunks: false }
	} :
	{
		entry: { app: './src/entry-client.js' }
	};

module.exports = {
	filenameHashing: false,
	productionSourceMap: false,
	configureWebpack,
	chainWebpack
}