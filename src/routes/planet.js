const express = require('express'); // inyectamos express
const router = express.Router(); // inyectamos router
const mongoose = require('mongoose'); // inyectamos mongoose
let Planet = require('../models/planet'); // importamos el modelo de planets

router.get('/planets', async (req, res) => { //ruta con tabla estilizada
  const Planets = await Planet.find({});
  res.render('planetList.ejs', {Planets});
});

module.exports = router; // exportamos el router de planets