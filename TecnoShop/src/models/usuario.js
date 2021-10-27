const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
  nombre: String,
  apellidos: String,
  tipo_usuario: String,
  correo: String,
  password: String,
  fecha_creacion: Date,
  fecha_modificacion: Date,
},);

const UsuarioModel = mongoose.model('Usuario', UsuarioSchema);
module.exports = { UsuarioSchema, UsuarioModel };
