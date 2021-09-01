const express = require("express");
const app = express();
const port = 3000;
const Conn = require("./models/connect/connect");

app.use(express.json());

Conn("localhost", 27017, "musicasRock");

const Musica = require("./routes/rotas");
app.use("/musicas", Musica);

app.listen(port, () => {
  console.info(`Servidor rodando na porta ${port}`);
});
