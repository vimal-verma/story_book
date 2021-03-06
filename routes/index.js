const express = require('express')
const route = express.Router()
const Story = require('../model/story')
const {ensureAuth, ensureGuest} = require('../middleware/auth')

route.get('/' , async (req,res)=>{
    try {
        const story = await Story.find({status: 'public'})
        .populate('user')
        res.render('index',{story, auth : req.user})
    } catch (error) {
        console.log(error)
    }
})

route.get('/home', ensureAuth, async (req,res)=>{
    try {
        const story = await Story.find({user: req.user.id})
        res.render('home',{story, auth : req.user})
    } catch (error) {
        console.log(error)
    }
})

route.get('/about', (req,res)=>{
    res.render('about',{auth : req.user})
})




module.exports = route