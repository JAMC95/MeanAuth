const express = require('express')
const router = express.Router()

// Register
router.post('/register', (req, res, next) => {
    res.send('REGISTER')
})

// Authenticate
router.post('/authenticate', (req, res, next) => {
    res.send('Authenticate')
})


// Profile
router.get('/profile', (req, res, next) => {
    res.send('Profile')
})

// Validate
router.get('/validate', (req, res, next) => {
    res.send('Vaidate')
})

module.exports = router