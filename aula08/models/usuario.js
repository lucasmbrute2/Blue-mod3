const mongoose = require('mongoose');

// o Schema pede um objeto, e a tipagem é passa dentro de outro objeto no valor
const usuarioModel = new mongoose.Schema({
    nome: {type: String, required: true},
    sobrenome:{type: String},
    cpf: {type: String, required: true},
    idade: {type: Date, required: true},
    senha: {type: String, required: true},
}) 
    
const Usuario = mongoose.model("Usuario",usuarioModel)

module.exports = Usuario