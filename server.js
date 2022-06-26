const express = require('express')
const app = express()

//importo mi conexion mongoose
const archivoBD = require('./conexion')

//importación de archivo de rutas y modelos 
const rutausuario = require('./rutas/usuario')

// importamos el body-parser y lo configuro
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)

app.get('/', (req, res) => {
  res.end('Bienvenidos al servidor Node')
})

//configuración básica del server
app.listen(5000, function(){
  console.log('servidor corriendo correctemente')
})
