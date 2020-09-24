const PORT = 3000

const path = require('path')

const fs = require('fs')

const server = require('express')()

const express = require('express')

const renderer = require('vue-server-renderer').createRenderer(

    {
        template: fs.readFileSync('./dist/index.html', 'utf-8')
    }

)

const serverBundle = require('./dist/js/server-bundle.js')


server.use('/css',express.static(path.resolve(__dirname, './dist/css')))

//server.use('/js',express.static(path.resolve(__dirname, './dist/js')))

server.use('/img',express.static(path.resolve(__dirname, './dist/img')))


server.get('*', (req, res) => {

    let context = {url: req.url, title: ''}

    serverBundle(context).then(app => {

        renderer.renderToString(app, context, (err, html) => {

            if (err) {
                console.log(err)
                res.status(500).end(err)
            } else {
                res.end(html)
            }
        })

    }).catch(err=>console.log(err));

})


server.listen(PORT, () => console.log(`Server was started on port the ${PORT}`))