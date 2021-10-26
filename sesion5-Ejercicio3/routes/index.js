const express = require('express');
const router = express.Router();

// Handler for list all notes
router.get('/', async (req, res) => {
    const notes = await sequelize.models.Notes.findAll(); // Getting all notes in database
    return res.json(notes);
  });

  

module.exports = router;

