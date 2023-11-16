const mongoose = require('mongoose')

const projectShema = new mongoose.Shema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Project', projectShema)