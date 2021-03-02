const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

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

app.get('/', (req, res)=>{
    res.send("hello world")
})

app.listen(port, console.log(`app is running on port ${port}, go to http://localhost:${port}`))