const path = require('path')
const router = require('express').Router()
const controller = require(path.resolve(__dirname, '../controllers/Index'))

router.get('/', controller.getIndex)

module.exports = router