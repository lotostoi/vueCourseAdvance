const PORT = 3000

const path = require('path')

const fs = require('fs')

const server = require('express')()

const express = require('express')

const LRU = require('lru-cache')

const pagesCache = new LRU({ max: 30, maxAge: 30 * 1000 })

const renderer = require('vue-server-renderer').createRenderer(

	{
		template: fs.readFileSync('./dist/index.html', 'utf-8')
	}

)

const serverBundle = require('./dist/js/server-bundle.js')

server.use('/css', express.static(path.resolve(__dirname, './dist/css')))

server.use('/js', express.static(path.resolve(__dirname, './dist/js')))

server.use('/img', express.static(path.resolve(__dirname, './dist/img')))


const blokedPathes = [
	"/toCart",
	"/login",
	"/office"
]

server.get('*', (req, res) => {

	if (req.url in blokedPathes) return

	if (pagesCache.has(req.url)) {

		console.log('form Cache');
		return res.end(pagesCache.get(req.url))
	}

	let context = { url: req.url, title: '' }

	serverBundle(context).then(({ app, error }) => {

		renderer.renderToString(app, context, (err, html) => {

			if (err) {
				res.status(500).end(err)
			} else {
				if (error) {
					res.status(error).end(html)
				} else {
					console.log('form server');
					pagesCache.set(req.url, html)
					res.end(html)
				}
			}
		})

	}).catch(err => console.log(err));

})


server.listen(PORT, () => console.log(`Server was started on port the ${PORT}`))