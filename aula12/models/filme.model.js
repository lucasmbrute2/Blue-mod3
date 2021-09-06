const mongoose = require("mongoose");

const filmeModel = new mongoose.Schema({
    nome: {type:String, required: true},
    genero: {type: String, required: true},
    duracao : {type: Number, required: true},
    descricao: {type: String, required: true},
    imagem: {type: String, required: true},
    nota: {type: Number}
})

const Filme = mongoose.model("filmes", filmeModel)

module.exports = Filme;