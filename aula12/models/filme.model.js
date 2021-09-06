const mongoose = require("mongoose");

const filmeModel = new mongoose.Schema({
    nome: {type:String, required: true},
    lancamento: {type: String, required: true},
    imagem: {type: String, required: true},
    trailer: {type: String}
    
   
})

const Filme = mongoose.model("filmes", filmeModel)

module.exports = Filme;