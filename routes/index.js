const express = require('express')
const route = express.Router()

route.get('/', (req,res)=>{console.log("main page")})

route.get('/home', (req,res)=>{console.log("home")})

route.get('/login', (req,res)=>{console.log("login")})

route.get('/dashboard', (req,res)=>{console.log("login")})



module.exports = route