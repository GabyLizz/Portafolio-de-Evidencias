// database.js
const { Sequelize } = require('sequelize');

// Database connection
const sequelize = new Sequelize('NotesDB', 'Admin', '12345', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: false,
});

module.exports = sequelize;