const express = require('express')
const app = express()
require('dotenv').config()

const dbConfig = require('./config/dbConfig')
const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use("/api/blogs", blogRoutes)
app.use("/api/users", userRoutes)

app.listen(3000, () => {console.log(`Server is running on port 3000`)})