const express = require('express')
const http = require('http')
const config = require('./config')
const app = express()
const server = http.createServer(app)

config.colors.enable()

app.get('/', (req, res) => {
    // TODO GET root
    try {
        res.status(200).send('Hello World')
    }
    catch(error) {
        console.error(error.message.bold)
    }
})

server.listen(config.port, () => {
    console.log(`[nodemon] server is running on port:${config.port}`.green)
})