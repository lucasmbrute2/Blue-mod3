const express = require('express')//importa o express

const app = express() // inicializa o express


app.get('/',function(req,res){

    res.send('Hello chica')

})

app.get('/blue',function(req,res){

    res.send('<h1>Welcome, Blumer </h1>')
})


app.listen(3000)

console.log('Servidor rodando')