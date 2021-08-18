const express = require('express')
const app = express();

const port =3000;

const games = [
    'The Last of Us',
    'Ori, the blid forest',
    'Horizon Zero Dawn'
] 
const msgInicio =[
    'Bem-vindo ao meu site',
    'Olá :)',
    'Oi',
    'Que bom que você chegou!'
]  

function randomMinMax(min, max){
    return Math.floor(Math.random() *(max-min)) + min;
}

function frases(num){
    return msgInicio[num]
}

app.get('/',(req,res)=>{

    res.send("Bem-vindo a página principal! Não, não tem layout haha. Para acessar a lista de jogos, utilize a rota '/games'")

})

app.get('/games',(req,res)=>{
    
    let texto = 'Caso queira escolher algum Jogo, passe a sua chave na URL, ficando assim: http://localhost:3005/games/"valor desejado"'
    res.send(games)

})  

app.get('/games/:id',(req,res)=>{

    const id = req.params.id -1;
    const jogos = games[id];
    if(jogos ==undefined){
        res.send('Não existe esse valor')
    }else{
    res.send(jogos)}

})

app.get('/random',(req,res)=>{

    res.send(frases(randomMinMax(0,msgInicio.length)))
})


app.listen(port,()=>{

    console.info(`O servidor está em https://localhost:${port}`)

})