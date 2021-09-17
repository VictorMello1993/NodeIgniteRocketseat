const express = require('express');

const app = express()

//Lista os cursos
app.get('/courses', (req, res) => {
  return res.json(['Curso 1', 'Curso 2', 'Curso 3'])
})

//Adicionand curso 4 ao array
app.post('/courses', (req, res) => {
  return res.json(['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4'])
})

//Atualizando do curso 1 para curso 6
app.put('/courses/:id', (req, res) => {
  return res.json(['Curso 6', 'Curso 2', 'Curso 3', 'Curso 4'])
})

//Atualizando do curso 2 para curso 7
app.patch('/courses/:id', (req, res) => {
  return res.json(['Curso 6', 'Curso 7', 'Curso 3', 'Curso 4'])
})

//Excluindo o curso 3
app.delete('/courses/:id', (req, res) => {
  return res.json(['Curso 6', 'Curso 7', 'Curso 4'])
})

app.listen(3333, () => console.log('Server is running...'))