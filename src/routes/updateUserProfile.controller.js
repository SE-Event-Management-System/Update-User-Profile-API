const express = require('express');
const errors = require('../../errors/errors.js');
const { v4 } = require('uuid');
const router = express.Router();

router.post('/userProfile', require('../validators/updateUserProfile.validator.js'), require('./updateUserProfile.service.js'))

router.all('*', (req, res, next) => {
    return res.status(405).json({
        statusCode: 1,
        timestamp: Date.now(),
        requestId: req.body.requestId || v4(),
        info: {
            code: errors['005'].code,
            message: errors['005'].message,
            displayText: errors['005'].displayText
        },
    })
})

module.exports = router