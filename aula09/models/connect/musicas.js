const mongoose = require('mongoose');

const musicaModel = new mongoose.Schema({
    nome: {type:String , required: true},
    genero: {type:String, required: true}
})

const Musica = mongoose.model('musicas',musicaModel)

module.exports = Musica;