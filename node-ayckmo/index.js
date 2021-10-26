const express = require('express');
const math = require('./Math');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello from Express',
    suma: `La suma entre 2 + 2 es ${math.sum(2, 2)}`,
  });
});

app.listen(3000);
