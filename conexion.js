const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/crudmernstack');

objetodb = mongoose.connection

objetodb.on('connected', ()=>{console.log('Conectado exitosamente')})
objetodb.on('error', ()=>{console.log('Problema de conexión')})

module.exports = mongoose