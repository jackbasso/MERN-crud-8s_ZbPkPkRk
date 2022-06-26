const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/crudmernstack');

objetodb = mongoose.connection

objetodb.on('connected', ()=>{console.log('Conectado exitosamente con MongoDB')})
objetodb.on('error', ()=>{console.log('Problema de conexión')})

module.exports = mongoose // exporto para utilizarlo en el server