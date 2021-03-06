const express = require('express')
const route = express.Router()
const {ensureAuth} = require('../middleware/auth')
const Story = require('../model/story')


route.get('/add', ensureAuth ,(req,res)=>{
    res.render('add_story',{auth : req.user})
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

route.get('/:id' ,async (req,res)=>{
    try {
        const story = await Story.find({_id: req.params.id})
        .populate('user')
        res.render('one_story',{story, auth : req.user})
    } catch (error) {
        console.log(error)
    }
})


module.exports = route