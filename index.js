const express = require('express')
const app = express()
const {moviesRouter, cinemaRouter} = require('./routers')

app.use(express.json())

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});
app.use('/movies', moviesRouter)
app.use('/cinemas', cinemaRouter)

app.listen(3005, () => console.log('started'))
