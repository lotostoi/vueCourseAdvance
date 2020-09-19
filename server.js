const PORT = 3000

const Vue = require('vue')

const server = require('express')()

const renderer = require('vue-server-renderer').createRenderer()

const serverBundle = require('./dist/js/server-bundle.js')

const axios = require('axios')

//serverBundle().then(app => console.log(app));


server.get('*', (req, res) => {

    serverBundle().then(app => {

        console.log(app)

        renderer.renderToString(app, (err, html) => {

            if (err) {
                console.log(err)
                res.status(500).end(err)
            } else {

                res.end(html)

            }



        })


    });




})


server.listen(PORT, () => console.log(`Server was started on port the ${PORT}`))