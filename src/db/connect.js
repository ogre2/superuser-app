const config = require('../config')
const mongoose = require('mongoose')
const db = mongoose.connection

config.colors.enable()

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

db.on('error', console.error.bind(console, 'Error connecting to MongoDB'.red))
db.once('open', () => {
    console.log('[nodemon] connected to MongoDB'.white)
})