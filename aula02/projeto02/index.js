const express = require('express')
const app = express();

const port =3000;
app.use(express.json())

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


//endpoint index
app.get('/',(req,res)=>{

    res.send("Bem-vindo a página principal! Não, não tem layout haha. Para acessar a lista de jogos, utilize a rota '/games'")

})

//endpoint que retorna a lista completa
app.get('/games',(req,res)=>{
    res.send(games)
})  

//endpoint que irá retornar um item específio da lista
app.get('/games/:id',(req,res)=>{

    const id = req.params.id -1;
    const jogos = games[id];
    if(jogos ==undefined){
        res.send('Não existe esse valor')
    }else{
    res.send(jogos)}

})

//endpoint que retorna mensagens aleatorias de boas vindas.

app.get('/random',(req,res)=>{

    res.send(msgInicio[(randomMinMax(0,msgInicio.length))])
})


// endpoint para adicionar algum elemento a lista.
app.post('/newgame',(req,res)=>{

    const game = req.body.jogo;
    const id = games.length+1
    if(!games.includes(game)){ //o includes verifica se o game já está na lista
        games.push(game)
        res.send(`O jogo ${game} foi adicionado com sucesso na posição ${id} da lista.`)
    }else{
        res.send('Esse jogo já está na lista.')
    }      
})

//endpoint para editar itens na lista
app.put('/changeGame/:id',(req,res)=>{

    const id  = req.params.id -1
    const game = req.body.jogo
    const gameAnterior = games[id]
    games[id] = game
    res.send(`O game ${gameAnterior} foi alterado para ${game} com sucesso!`)
})

//endpoint para deletar itens na lista, caso haja.
app.delete('/deleteGame/:id',(req,res)=>{

    const id = req.params.id -1
    const gameDeletado = games[id]
    if(!games.includes(gameDeletado)){
        res.send('Esse jogo não foi encontrado na lista')
    } else{
        games.splice(id,1)
        res.send(`${gameDeletado} foi excluido da lista`)
    }

})



app.listen(port,()=>{

    console.info(`O servidor está em http://localhost:${port}.`)

})