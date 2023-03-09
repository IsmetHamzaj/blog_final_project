const mongoose = require('mongoose')

mongoose.connect(process.env.MOGNO_URL)

const connection = mongoose.connection

mongoose.set('strictQuery', true)


connection.on("connected", () => {
    console.log("MongoDb successfully connected")
})


connection.on("error", () => {
    console.log("Error on connectiong to MongoDB")
})


module.exports = mongoose