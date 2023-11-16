const mongoose = require('mongoose')

const notificationShema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Notification', notificationShema)