const express = require("express");
const app = express();
const router = require('./routes/filmes')
const Connect = require('./connect/connect')
app.use(express.json());

const port = 3000;
Connect()
app.use("",router)
app.listen(port, () => {
  console.info(`Servidor rodando em http://localhost:${port}`);
});
