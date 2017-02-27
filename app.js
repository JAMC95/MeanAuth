const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')

const app = express()

const user = require('./routes/users')

//Port Number
const port = 3000;

//CORS Middleware
app.use(cors())

// Body Parser Middleware
app.use(bodyParser.json())

app.use('/users', user)

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid endpoint')
})

// Start Server
app.listen(port, () => {
    console.log('Sever stared on port '+port)
})