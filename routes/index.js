const express = require('express')
const route = express.Router()
const Story = require('../model/story')
const {ensureAuth, ensureGuest} = require('../middleware/auth')

route.get('/' , async (req,res)=>{
    try {
        const story = await Story.find({status: 'public'})
        .populate('user')
        const auth = req.user ? true : false
        res.render('index',{story, auth})
    } catch (error) {
        console.log(error)
    }
})

route.get('/home', ensureAuth, async (req,res)=>{
    try {
        const story = await Story.find({user: req.user.id})
        const auth = req.user ? true : false
        res.render('home',{story, auth})
    } catch (error) {
        console.log(error)
    }
})

route.get('/about', (req,res)=>{
    const auth = req.user ? true : false
    res.render('about',{auth})
})




module.exports = route