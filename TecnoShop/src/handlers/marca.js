const express = require('express');
const router = express.Router();
const { UserModel: Usuario } = require('../models/marca');

// creando usuario
router.post('/', async (req, res) => {
  const {
    marca,
    fecha_modificacion,
  } = req.body;

  const usuario = new Usuario({
    marca,
    fecha_modificacion,
  });

  await usuario.save();
  return res.status(201).json();
});

module.exports = router;