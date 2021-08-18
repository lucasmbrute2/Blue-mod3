const express = require('express')
const app = express();

const port =3005;

const games = [
    'The Last of Us',
    'Ori, the blid forest',
    'Horizon Zero Dawn'
] 
app.get('/',(req,res)=>{

    res.send("Bem-vindo a página principal! Não, não tem layout haha. Para acessar a lista de jogos, utilize a rota '/games'")

})

app.get('/games',(req,res)=>{
    
    let texto = 'Caso queira escolher algum Jogo, passe a sua chave na URL, ficando assim: http://localhost:3005/games/"valor desejado"'
    res.send(games)

})  



app.get('/games/:id',(req,res)=>{

    const id = req.params.id;
    const jogos = games[id];
    res.send(jogos)

})




app.listen(port)