const express = require('express');
const app = express();

const port = 3003;

lista =[

    'Lucas',
    'Joana',
    'Maria',
    'Geovana',
    'Clara',
    'Marcela'
]
app.get('/',(req,res)=>{

    res.send('Bem-vindo a minha lista de nomes:)')
})

app.get('/lista',(req,res)=>{

    res.send(lista)

})

app.get('/lista/:id', (req,res)=>{

    const id = req.params.id;
    const nomeEscolhido = lista[id]
    res.send(`<h1>${nomeEscolhido}</h1>`)
})  









app.listen(port, ()=>{
    
    console.info(`http://localhost:${port}`)
})