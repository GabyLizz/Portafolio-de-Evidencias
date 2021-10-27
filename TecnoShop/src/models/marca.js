const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MarcaSchema = new Schema({
  marca: String,
  fecha_modificacion: Date,
},);

const MarcaModel = mongoose.model('Marca', MarcaSchema);
module.exports = { MarcaSchema, MarcaModel };
