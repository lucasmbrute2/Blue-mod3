const express = require('express');
const { send } = require('process');
const app = express();

const filmes =[
    "Parasita",
    "Vingadores",
    "Homem de Ferro",
    "Homem-Aranha"
]

const port = 3001


app.use(express.json()); //falar para as reqs do express trabalhar em JSON


app.get('/',(req,res)=>{

    res.send('')
})

app.get('/filmes',(req,res)=>{

    res.send(filmes)

})

app.get('/filmes/:id',(req,res)=>{

    const id = req.params.id
    const filme = filmes[id -1] 
    
    if(!filme){
        res.send('Filme não encontrado')
    }
    res.send(filme)

})

app.post('/filmes/add', (req,res)=>{

    const filme = req.body.filme;
    const id = filmes.length +1
    filmes.push(filme);
    res.send(`O filme adicionado foi ${filme} e o ID é ${id}`)
})


app.put('/filmes/:id',(req,res)=>{

    const id = req.params.id -1
    const filme = req.body.filme
    const filmeAnterior = filmes[id]
    filmes[id] = filme;

    res.send(`O filme alterado foi ${filmeAnterior} e virou ${filme}`)
})


app.delete('/filmes/:id', (req,res)=>{

    const id = req.params.id-1;
    const filmeDeletado = filmes[id]
    if(filmeDeletado ==undefined){
        res.send('Filme não encontrado')
    }else{
        games.splice(id,1);
        res.send(`O filme foi deletado ${filmeDeletado}.`)
    }
    
})







app.listen(port,()=>{
    console.info(`O servidor está rodando na porta http://localhost:${port}.`)
})


console.log('O node está rodando')