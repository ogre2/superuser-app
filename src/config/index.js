const path = require('path')
const dotenv = require('dotenv')
const colors = require('colors')

dotenv.config({ path: path.join(__dirname, './.env') })

module.exports = {
    port: process.env.PORT || 5000,
    colors
}