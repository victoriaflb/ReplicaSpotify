// API - Application Programming Interface
// POST, GET, PUT, DELETE
// CRUD - Create, Read, Update, Delete

import express from 'express';
import {artistArray} from "../../front-end/src/assets/database/artists"
import {songsArray} from "../../front-end/src/assets/database/songs"

const app = express();
const PORT = 3000;

app.get('/', (request ,response) =>{
    response.send("Olá, Mundo! Agora não preciso mais atualizar")
  })

app.get('/artists', (request ,response) =>{
  response.send(artistArray)
})

app.get('/songs', (request ,response) =>{
    response.send(songsArray)
  })

app.listen(PORT, () =>{
console.log(`Servidor está escutando na porta ${PORT}`)
})