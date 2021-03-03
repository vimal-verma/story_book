const express = require('express')
const passport = require('passport')
const route = express.Router()

route.get('/', (req,res)=>{console.log("login")})

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