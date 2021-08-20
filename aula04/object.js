const express = require('express');
const app = express()
porta = 3001
app.use(express.json())

carros = []

function Carro(modelo,tipo,combustivel,marca,ano){
    
    this.modelo = modelo;
    this.tipo = tipo;
    this.combustivel = combustivel;
    this.marca = marca;
    this.ano = ano;
}


app.get('/',(req,res)=>{

    res.send('Olá')
})

app.get('/lista',(req,res)=>{

    res.send(carros)
})

app.post('/addCar',(req,res)=>{

    let carro = new Carro(
        req.body.modelo,
        req.body.tipo,
        req.body.combustivel,
        req.body.marca,
        req.body.ano
    )
    carros.push(carro)
    res.send("Carro adicionado com sucesso!") 
})






app.listen(porta,()=>{

    console.info(`O app está rodando em http://localhost:${porta}.`)
})
