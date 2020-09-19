

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
		entry: { app: './src/entry-client.js' },
		optimization: {
			minimize: false
		},
	}



let _chainWebpack = isServer ?
	config => {
		config.plugins.delete('html')
		config.plugins.delete('preload')
		config.plugins.delete('prefetch')
	} :
	config => {
		config.plugin('html').tap(options => {
			options[0].minify = false;
			return options;
		});
	}



module.exports = {
	filenameHashing: false,
	productionSourceMap: false,
	publicPath: '/',
	chainWebpack: config => {
		config.plugin('define').tap(options => {
			options[0]['process.isClient'] = !isServer
			options[0]['process.isServer'] = isServer
			return options
		})
		_chainWebpack(config)
	},
	configureWebpack: (config) => {
		return {
			...
			configWebpack,
			devServer: {
				proxy: {
					'/vue-advanced-api-l3': {
						target: 'http://wp.dmitrylavrik.ru',
						secure: false,
						changeOrigin: true

					}
				}
			}
		}
	}
}