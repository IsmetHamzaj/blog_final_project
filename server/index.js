const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const dbConfig = require('./config/dbConfig')
const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require('./routes/userRoutes')
const commentRoutes = require('./routes/commentRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use("/api/blogs", cors() ,blogRoutes)
app.use("/api/users", userRoutes)
app.use("/api/comments", commentRoutes)

app.listen(3000, () => {console.log(`Server is running on port 3000`)})