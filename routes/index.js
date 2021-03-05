const express = require('express')
const route = express.Router()
const Story = require('../model/story')
const {ensureAuth, ensureGuest} = require('../middleware/auth')

route.get('/', ensureGuest , async (req,res)=>{res.render('index')})

route.get('/home', ensureAuth, async (req,res)=>{
    try {
        const story = await Story.find()
        res.render('home',{story})
    } catch (error) {
        console.log(error)
    }
})

route.get('/about', (req,res)=>{res.render('about')})

route.get('/support', ensureAuth, (req,res)=>{res.render('about')})



module.exports = route