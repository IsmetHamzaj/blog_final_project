const express = require('express')
const app = express()
require('dotenv').config()

const dbConfig = require('./config/dbConfig')


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(3000, () => {console.log(`Server is running on port 3000`)})