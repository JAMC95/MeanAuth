const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
const passport = require('passport')
const mongoose = require('mongoose')
const config = require('./config/database')

// Connect to Database
mongoose.connect(config.database)

// On connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database '+config.database)
})

// On error
mongoose.connection.on('error', (err) => {
    console.log('Connected to database failed '+err)
})

const app = express()

const user = require('./routes/users')

// Port Number
const port = 3000;

// CORS Middleware
app.use(cors())

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')))

// Body Parser Middleware
app.use(bodyParser.json())

// Passport Middleware
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport)

app.use('/users', user)

// Index Route
app.get('/', (req, res) => {
    res.send('Invalid endpoint')
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

// Start Server
app.listen(port, () => {
    console.log('Sever stared on port '+port)
})