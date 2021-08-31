const express = require('express');
const mongoose = require('mongoose');
const Usuario = require('./models/usuario')
const app = express();
//url de conexão -> mongodb://servidor:porta/nomo do banco
mongoose.connect("mongodb://localhost:27017/usuario", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const usuario1 = new Usuario({
    nome:"Lucas",
    sobrenome: "Souza",
    cpf: "13233131313",
    idade: 21,
    senha: "blue"

})

//funções assincronas -> aqui cadastra dados 
// usuario1.save()
// //pesquisar sobre promise em JS
// .then(()=>{
//     console.log('Usuario cadastrado')
// })

// .catch((err)=>{
//     console.error(err)
// })


app.get('/usuarios',(req,res)=>{

    Usuario.find({})
    .then((usuarios)=>{
        res.send(usuarios)
    console.log(usuarios)
    })
    .catch((err)=>{
    console.log(err)
})
})
// metodo ->get


// -> metodo delete
// Usuario.findByIdAndDelete("612d71c02465271cb496e5d4")
// .then(()=>{
//     console.log('usuario excluido')
// })









const port = 3000;

app.get('/',(req,res)=>{

    res.send('Hello')
})




app.listen(port,()=>{
    console.info(`O servidor está rodando na rota http://localhost:${port}.`)
})
