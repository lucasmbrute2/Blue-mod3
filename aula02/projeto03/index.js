const express = require('express');
const app = express();

const port = 3003;

const lista =[

    'Lucas',
    'Joana',
    'Maria',
    'Geovana',
    'Clara',
    'Marcela'
]
const msgInicio=[

    'Olá',
    'Bem-vindo',
    'Olha lá quem voltou'
]


function randomMinMax(min,max){
    return Math.floor(Math.random()*(max-min)) + min;
}




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


app.get('/random', (req,res)=>{

    res.send(msgInicio[randomMinMax(0,3)])

})






app.listen(port, ()=>{
    
    console.info(`http://localhost:${port}`)
})