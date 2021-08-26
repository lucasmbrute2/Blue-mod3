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
        nome: "Aloha",
        imagemUrl: "isso é um URL, acredite :)"    
    },  
    
];


//Funcoes de validação

/* function getFilmesValidos(){
   return filmes.filter(Boolean); -> isso é a msm coisa da função de baixo
}*/ 

const getFilmesValidos = ()=> filmes.filter(Boolean); 
const getFilmesbyId = id => getFilmesValidos().find(elemento=> elemento.id === id)
const getFilmebyIndex = id => getFilmesValidos().findIndex(elemento=> elemento.id ===id)



app.get("/", (req, res) => {
  res.send("");
});

app.get("/filmes", (req, res) => {
  res.send(getFilmesValidos())
});

app.get("/filmes/:id", (req, res) => {
  const id = +req.params.id;
  const filme = getFilmesbyId(id);

  if (!filme) {
    res.send("Filme não encontrado");
  }
  res.send(filme);
});

app.post("/filmes", (req, res) => {
  const filme = req.body
    
  if(!filme || !filme.nome || !filme.imagemUrl){
    res.status(400).send({
      message: "Filme inválido."
   });    
  return
  }
  const ultimoFilme = filmes[filmes.length-1]
  if(filmes.length){
    filme.id = ultimoFilme.id+1
    filmes.push(filme)
    res.send(`O filme "${filme.nome}" foi adicionado com sucesso.`)
  }else{
    filme.id = 1
    filmes.push(filme)
    res.send(`O filme "${filme.nome}" foi adicionado com sucesso.`)
  }
  
});

app.put("/filmes/:id", (req, res) => {
  const id = +req.params.id;
  const filme = req.body
  const index = getFilmebyIndex(id)
  const filmeAnterior = filmes[index]
  filmes[index] = filme
  
  // res.send(`O filme alterado foi ${filmeAnterior} e virou ${filme}`);
  res.send(`O filme ${filmeAnterior.nome} foi alterado para ${filme.nome}`)
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
