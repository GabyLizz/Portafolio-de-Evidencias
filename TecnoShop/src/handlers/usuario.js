const express = require('express');
const router = express.Router();
const { UserModel: Usuario } = require('../models/usuario');

// creando usuario
router.post('/', async (req, res) => {
  const {
    nombre,
    apellidos,
    tipo_usuario,
    correo,
    password,
    fecha_creacion,
    fecha_modificacion,
  } = req.body;

  const usuario = new Usuario({
    nombre,
    apellidos,
    tipo_usuario,
    correo,
    password,
    fecha_creacion,
    fecha_modificacion,
  });

  await usuario.save();
  return res.status(201).json();
});

module.exports = router;