const express = require('express')

const app = express()

app.get('/hello', (req,res)=>{

    res.send('Hello Worldss')
    
})

console.log('Servidor rodando!')

app.listen(3000)
