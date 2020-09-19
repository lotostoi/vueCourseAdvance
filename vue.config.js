
const isServer = process.argv.includes('--server')


let configWebpack = isServer ?
	{
		entry: { app: './src/entry-server.js' },
		output: {
			filename: 'js/server-bundle.js',
			libraryTarget: 'commonjs2',
			libraryExport: "default"
		},
		optimization: {
			splitChunks: false,
			minimize: false
		},
		target: 'node'
	} :
	{
		entry: { app: './src/entry-client.js' }
	}


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
			...
			configWebpack,
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