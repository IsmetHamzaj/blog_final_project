const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    sports: {
        type: String,
        required: false
    },
    news: {
        type: String,
        required: false
    },
    technology: {
        type: String,
        required: false
    },
    education: {
        type: String,
        required: false
    }
})

const categoryModel = mongoose.model("Category", categorySchema)

module.exports = categoryModel