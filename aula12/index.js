const express = require("express");
const app = express();
const router = require('./routes/filmes')
const Connect = require('./connect/connect')
app.use(express.json());

const port = 3000;
Connect()
app.get('/index', (req,res)=>{
  res.send("<h1>Hello</h1>")
})

app.use("",router)
app.listen(port, () => {
  console.info(`Servidor rodando em http://localhost:${port}`);
});
