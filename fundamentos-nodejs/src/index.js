const express = require('express');

const app = express()

app.get('/', (req, res) => {
  return res.json({message: 'Olá mundo'})
})

app.listen(3333, () => console.log('Server is running...'))