const mongoose = require('mongoose')

const problemShema = new mongoose.Shema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    bureauId: {
        type: String, 
        required: true
    },
}, {timestamps: true})

module.exports = mongoose.model('Problem', problemShema)