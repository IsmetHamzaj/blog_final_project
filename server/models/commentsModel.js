const mongoose = require('mongoose')


const commentsSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
        required: true
    }
})


const commentsModel = mongoose.model('Comment', userSchema)

module.exports = commentsModel