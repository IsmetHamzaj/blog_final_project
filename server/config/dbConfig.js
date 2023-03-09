const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://IsmetHamzaj:Djelli27072009@cluster0.r9t2lm4.mongodb.net/blogging")

const connection = mongoose.connection

mongoose.set('strictQuery', true)


connection.on("connected", () => {
    console.log("MongoDb successfully connected")
})


connection.on("error", () => {
    console.log("Error on connectiong to MongoDB")
})


module.exports = mongoose