const mongoose = require('mongoose')

const bureauShema = new mongoose.Schema({
    adresse: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Bureau', bureauShema)