const mongoose = require("mongoose");

const musicaModel = new mongoose.Schema({
  nome: { type: String, required: true },
  genero: { type: String, required: true },
  autor: { type: String, required: true },
  duracao: { type: Number, required: true },
});

const Musica = mongoose.model("musicasRock", musicaModel);

module.exports = Musica;
