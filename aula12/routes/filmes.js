const Filme = require('../models/filme.model')
const express = require('express')
const router = express.Router()


router.get('/', async (req,res)=>{

    await Filme.find({})
    .then((filme)=> res.send(filme))
    .catch((err)=>res.error(200).send("Algod eu errado."))
})

router.post('/add', async (req,res)=>{
    await Filme.create(req.body)
    .then(()=>res.send("Filme adicionado com sucesso!"))
    .catch(err=>console.error(err))
})

router.put('/update/:id', async (req,res)=>{

    await Filme.updateOne({_id: req.params.id}, req.body)
    .then(()=>res.status(200).send("Filme atualizado com sucesso!"))
    .catch(err=> console.error(err))
})


router.delete('/delete/:id' , async (req,res)=>{
    await Filme.deleteOne({_id: req.params.id})
    .then(()=>res.status(200).send('Filme deletado com sucesso!'))
    .catch((err)=>res.status(400).send("Algo deu eraddo."))
})

module.exports = router;