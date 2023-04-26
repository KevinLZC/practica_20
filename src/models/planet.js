const mongoose = require('mongoose'); // inyectamos la dependencia de mongoose
let PlanetsSchema = new mongoose.Schema({ // declaramos el esquema de los datos
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  orderFromSun: Number,
  hasRings: Boolean,
  mainAtmosphere: Array,
  surfaceTemperatureC: Object
});

module.exports = mongoose.model('Planets', PlanetsSchema); // exportamos el esquema