const express = require('express')
const router = express.Router()
const passport = require('passport')

// Start Google Login
router.get('/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
)

// Callback
router.get('/google/callback',
    passport.authenticate('google', {
        successRedirect: '/home',
        failureRedirect: '/'
    })
)

// Logout
router.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('/')
    })
})


module.exports = router
