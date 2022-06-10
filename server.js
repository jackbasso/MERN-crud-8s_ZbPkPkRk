const express = require('express')
const app = express()
//importo mi conexion mongoose
const conexionMongoose = require('./conexion')

app.get('/', (req, res) => {
  res.end('Bienvenidos al servidor Node')
})

//configuración básica del server
app.listen(5000, function(){
  console.log('servidor corriendo correctemente')
})
