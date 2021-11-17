const express = require('express');
const router = express.Router();
const MoviesController = require('../controllers/moviesController')

router.get('/', (req, res) =>
  res.send('1234'))
router.get('/get', async(req, res) =>
  res.send(await MoviesController.getMovies()))
router.post('/new', async(req, res) =>
  res.send(await MoviesController.addMovie(req)))

module.exports = {moviesRouter: router};