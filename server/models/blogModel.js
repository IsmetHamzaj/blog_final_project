const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true,
            default: Date.now()
        },
        tags: [String],
        // categoryId: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "Category",
        //     required: true
        // },
        imageUrl: { type: String }
        
    }
)

blogSchema.pre('save', function (next) {
    this.created = new Date();
    next();
});

const blogModel = mongoose.model("Blogs", blogSchema)

module.exports = blogModel