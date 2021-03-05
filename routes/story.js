const express = require('express')
const route = express.Router()
const {ensureAuth} = require('../middleware/auth')
const Story = require('../model/story')


route.get('/add', ensureAuth ,(req,res)=>{
    const auth = req.user ? true : false
    res.render('story',{auth})
})

route.post('/add', ensureAuth,(req,res)=>{
    const story = new Story({
        user: req.user.id,
        title : req.body.title,
        body : req.body.body,
        status : req.body.status

    })
    story.save()
    .then(result => res.redirect('/home'))
    .catch(err => console.log(err))
})



module.exports = route