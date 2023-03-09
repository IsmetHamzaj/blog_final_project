const express = require('express')
const app = express()
require('dotenv').config()

const dbConfig = require('./config/dbConfig')

app.listen(3000, () => {console.log(`Server is running on port 3000`)})