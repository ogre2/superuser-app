const express = require('express')
const http = require('http')
const path = require('path')
const config = require('./config')
const cors = require('cors')
const helmet = require('helmet')
const ejsLayouts = require('express-ejs-layouts')
const app = express()
const server = http.createServer(app)

config.colors.enable()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, '../client/views'))
app.set('layout', 'layouts/layout')
app.set('case sensitive routing', true)
app.set('json spaces', 2)

app.use(ejsLayouts)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())

app.use('/jquery', express.static(path.resolve(__dirname, '../node_modules/jquery/dist/')))
app.use('/popper', express.static(path.resolve(__dirname, '../node_modules/@popperjs/core/dist/umd/')))
app.use('/animate', express.static(path.resolve(__dirname, '../node_modules/animate.css/')))
app.use('/feathers', express.static(path.resolve(__dirname, '../node_modules/feather-icons/dist/')))
app.use('/aos', express.static(path.resolve(__dirname, '../node_modules/aos/dist/')))
app.use(express.static(path.resolve(__dirname, '../node_modules/bootstrap/dist/')))
app.use(express.static(path.resolve(__dirname, '../client/public')))

app.get('/', (req, res) => {
    // TODO GET root
    try {
        res.status(200).render('index', {
            title: 'Home'
        })
    }
    catch(error) {
        console.error(error.message.bold)
    }
})

server.listen(config.port, () => {
    console.log(`[nodemon] server is running on port:${config.port}`.green)
})