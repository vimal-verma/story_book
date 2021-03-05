const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
require('dotenv').config()
require('./config/passport')(passport)

// mongodb setup
const dbURI = process.env.DB_URL;
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => console.log('connected to db'))
  .catch(err => console.log(err));

// server and static file setup
const app= express();
const port = process.env.PORT || 5000
app.set('view engine', 'ejs');
app.use(express.static('public'))


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());


// session 
app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: false,

}))


//passport middleware
app.use(passport.initialize())
app.use(passport.session())


app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/story', require('./routes/story'))

app.listen(port, console.log(`app is running on port ${port}, go to http://localhost:${port}`))