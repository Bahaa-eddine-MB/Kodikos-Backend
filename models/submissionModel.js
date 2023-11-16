const mongoose = require('mongoose')

const submissionShema = new mongoose.Shema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    taskId: {
        type: String,
        required: true
    },
    documents: {
        type: [String],
        default: []
    },
    userId: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Submission', submissionShema)