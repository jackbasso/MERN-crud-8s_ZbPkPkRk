const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema


const eschemaUsuario = new eschema({
  nombre: String,
  email: String,
  telefono: String,
  idusuario: String
})

const ModeloUsuario = mongoose.model('usuarios', eschemaUsuario)
module.exports = router

/*
router.get('/ejemplo', (req, res) => {
  res.end('Saludos desde una ruta de ejemplo')
})
*/

//Agregar usuario
router.post('/agregarusuario', (req, res) => {
  const nuevousuario = new ModeloUsuario({
    nombre: req.body.nombre,
    email: req.body.email,
    telefono: req.body.telefono,
    idusuario: req.body.idusuario
  })
  nuevousuario.save(function(err){
    if(!err){
      res.send('Usuario agregado correctamente')
    } else {
      res.send(err)
    }
  })
})

//Obtener todos los usuarios registrados
router.get('/obtenerusuarios', (req, res) => {
  ModeloUsuario.find({}, function(docs, err){
    if(!err){
      res.send(docs)
    } else {
      res.send(err)
    }
  })
})
  //Obtener data de usuario
router.post('/obtenerdatausuario', (req, res) => {
  ModeloUsuario.find({idusuario:req.body.idusuario}, function(docs, err){
    if(!err){
      res.send(docs)
    } else {
      res.send(err)
    }
})
})
