const express = require('express')
const route = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

route.get('/', ensureGuest ,(req,res)=>{res.render('index')})

route.get('/home', ensureAuth, (req,res)=>{res.render('home')})

route.get('/about', (req,res)=>{res.render('about')})

route.get('/support', ensureAuth, (req,res)=>{res.render('about')})



module.exports = route