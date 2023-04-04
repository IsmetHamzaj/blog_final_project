const Comments = require('./../models/commentsModel')


const getAllComments = async (req, res) => {
    try {
        const comments = await Comments.find()
        if(comments.length > 0) {
            res.status(200).json({
                status: "Success",
                success: true,
                data: comments
            })
        } else {
            res.status(404).json({
                status: "Success",
                message: "There are no comments"
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            success: false,
            message: error
        })
    }
}


const getCommentById = async (req, res) => {
    try {
        const comment = await Comments.findById(req.params.id)
        if(!comment) {
            res.status(404).json({
                status: "Success",
                success: true,
                message: "Comment not found"
            })
        } else {
            res.json(200).json({
                status: "Success",
                success: true,
                data: comment
            })
        }
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            success: false,
            message: error
        })
    }
}


const createComments = async (req, res) => {
    try {
        const newComment = await Comments.create({
            content: req.body.content,
            blogId: req.params.blogId
        })
    } catch (error) {
        
    }
}

module.exports = {getAllComments, getCommentById}