const express = require('express');
const app = express();


const port = 3000;

const filmes = [
    'Vingadores',
    'Duro de matar',
    'Minha mãe é uma peça',
    'Parasita'
]

app.get('/', (req,res)=>{

    res.send('Hello, aqui está a lista de filmes:')
    
});

app.get('/filmes',(req,res)=>{

    res.send(filmes)
});

app.get('/filmes/:id',(req,res)=>{

    const id = req.params.id -1;
    const filme = filmes[id]
    res.send(filme);
})

app.listen(port, ()=>{

    console.info(`O app está rodando em http://localhost:${port}`)
})