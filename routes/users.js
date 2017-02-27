const express = require('express')
const router = express.Router()

// Register
router.get('/register', (req, res, next) => {
    res.send('REGISTER')
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