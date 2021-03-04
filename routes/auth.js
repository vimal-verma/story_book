const express = require('express')
const passport = require('passport')
const route = express.Router()
const {ensureGuest} = require('../middleware/auth')

route.get('/', ensureGuest, (req,res)=>{res.render('login')})

route.get('/google',passport.authenticate('google', { scope : ['email','profile']}))

route.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req,res) =>{
        res.redirect('/home')
    }
)

route.get('/logout', (req,res)=>{
    req.logOut()
    res.redirect('/')
})

module.exports = route