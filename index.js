const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Meower!😸😸'
  });
});

app.post('./mews', (req, res) => {
  console.log(req.body);
})

app.listen(5000, () => {
  console.log('listening on https://localhost:5000')
})