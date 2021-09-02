const express = require("express");
const app = express();
app.use(express.json());
const Connect = require("./connect/connect");

Connect("localhost", 27017, "listafilmes");
const port = 3000;

const Filmerota = require("./routes/filmes.routes");
app.use("/filmes", Filmerota);
app.listen(port, () => {
  console.info(`Servidor rodando em http://localhost:${port}`);
});
