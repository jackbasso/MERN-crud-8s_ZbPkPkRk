const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.end('Bienvenidos al servidor Node')
})

//configuración básica del server
app.listen(5000, function(){
  console.log('servidor corriendo correctemente')
})
