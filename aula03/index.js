const express = require("express");
const { send } = require("process");
const app = express();
const port = 3001;
app.use(express.json()); //falar para as reqs do express trabalhar em JSON

const filmes = [
    
    {
        id: 1,
        nome: "Parasita",
        imagemUrl: "https://pm1.narvii.com/7370/6005d29073162f91efccdb18e98a32f51f018198r1-897-1200v2_hq.jpg"
    },
    {
        id:2,
        nome: ""
    },
    {},
    {},
    {}
];


//Funcoes de validação
const getFilmesValidos = ()=> filmes.filter(Boolean); 
const getFilmesbyId = (id) => getFilmesValidos().find((filme)=> filme.id == id)


app.get("/", (req, res) => {
  res.send("");
});

app.get("/filmes", (req, res) => {
  res.send(filmes.filter(Boolean)); //poderia usar a função aqui, mas preferi deixar ''chumbado'', pois só será usado aqui.
});

app.get("/filmes/:id", (req, res) => {
  const id = req.params.id;
  const filme = getFilmesbyId(id);

  if (!filme) {
    res.send("Filme não encontrado");
  }
  res.send(filme);
});

app.post("/filmes/add", (req, res) => {
  const filme = req.body
    
  if(!filme || !filme.nome || filme.imagemUrl){
    res.status(400).send({
      message: "Filme inválido."
    });    
  }
  const ultimoFilme = filmes[filmes.length -1];
  if(filmes.length){}
    
    
    
    


});

app.put("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;
  const filme = req.body.filme;
  const filmeAnterior = filmes[id];
  filmes[id] = filme;

  res.send(`O filme alterado foi ${filmeAnterior} e virou ${filme}`);
});

app.delete("/filmes/:id", (req, res) => {
  const id = req.params.id - 1;
  const filmeDeletado = filmes[id];
  if (filmeDeletado == undefined) {
    res.send("Filme não encontrado");
  } else {
    delete filmes[id];
    res.send(`O filme foi deletado ${filmeDeletado}.`);
  }
});

app.listen(port, () => {
  console.info(`O servidor está rodando na porta http://localhost:${port}.`);
});

console.log("O node está rodando");
