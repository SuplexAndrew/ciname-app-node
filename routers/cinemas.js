const express = require('express');
const router = express.Router();
const CinemaController = require('../controllers/cinemaController')

router.get('/get', async(req, res) =>
  res.send(await CinemaController.getCinemas()))

module.exports = {cinemaRouter: router};