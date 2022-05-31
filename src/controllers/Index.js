const config = require('../config')

config.colors.enable()

exports.getIndex = (req, res) => {
    // TODO Get index view
    try {
        res.status(200).render('index', {
            title: 'Home',
            message: 'Hello World!'
        })
    }
    catch (error) {
        console.log(error.message.red)

        res.status(500).json({
            message: error.message
        })
    }
}