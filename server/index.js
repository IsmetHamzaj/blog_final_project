const express = require('express')
const app = express()
const dbConfig = require('./config/dbConfig')

require('dotenv').config()

app.listen(3000, () => {console.log(`Server is running on port 3000`)})