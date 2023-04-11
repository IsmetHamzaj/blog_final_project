const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()



const dbConfig = require('./config/dbConfig')

app.use(bodyParser.json())

const blogRoutes = require('./routes/blogRoutes')
const userRoutes = require('./routes/userRoutes')
const commentRoutes = require('./routes/commentRoutes')
const adminRoutes = require('./routes/adminRoutes')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use("/api/blogs", cors() ,blogRoutes)
app.use("/api/users", cors(), userRoutes)
app.use("/api/comments", cors(), commentRoutes)
app.use('/admin', cors(), adminRoutes)

app.listen(3000, () => {console.log(`Server is running on port 3000`)})