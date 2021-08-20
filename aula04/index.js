const express =  require('express');
const app = express()
port = 3000
app.use(express.json())

const modeloCarro = [
    "onix",
    "uno",
    "toro"

]

const tipoCarro = [
    "SUV",
    "Sedan",
    "Hatch"
]

const combustivelCarro = [
    "alcool",
    "gasolina",
    "flex",
    "diesel"
]

const marcaCarro = [
    "chevrolet",
    "fiat",
    "citroen"
]

const anoCarro = [
    1970,
    2005,
    2015
]

app.get('/',(req,res)=>{

    res.send('Olá, digite na rota a especificação do que quer ver : modeloCarro, tipoCarro, combustivelCarro, marcaCarro, anoCarro')
})


app.get('/modeloCarro',(req,res)=>{

    res.send(modeloCarro)

})

app.get('/tipoCarro',(req,res)=>{

    res.send(tipoCarro)
})

app.get('/combustivelCarro',(req,res)=>{

    res.send(combustivelCarro)
})

app.get('/marcaCarro',(req,res)=>{

    res.send(marcaCarro)
})

app.get('/anoCarro',(req,res)=>{

    res.send(anoCarro)

})

app.post('/novoModelo',(req,res)=>{

    const novoModelo = req.body.novoModelo
    modeloCarro.push(novoModelo)
    res.send('Modelo adicionado')

})

// app.put('/editModelo/:id',(req,res)=>{

//     const id = req.params.id -1
//     const oldModel = 
    

// })





app.listen(port,()=>{
    console.info(`O servidor está rodando em http://localhost:${port}.`)
})