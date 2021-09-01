const express = require('express');
const router = express.Router();
const Musica = require('../models/connect/musicas')




router.get('/',(req,res)=>{
    Musica.find({})
    .then((musica)=>{
        res.send(musica);
    }).catch ((err)=>{
        console.log(err)
    })   
})
    
router.get('/findById/:id',(req,res)=>{
    Musica.find({})
    .then((musica)=>{
        res.send(musica);
    }).catch ((err)=>{
        console.log(err)
    })   
})


router.post('/add', async (req,res)=>{
    await Musica.create(req.body)
    .then(()=>{
        res.status(200).send('Musica adicionada com sucesso!')
    }).catch((err)=>{
        res.status(400).send(err)
    })
})

router.put('/update/:id', async (req,res)=>{
    await Musica.updateOne({_id : req.params.id}, req.body)
    .then(()=>{
        res.status(200).send('Atualizado com sucesso!')
    }).catch((err)=>{
        res.status(400).send("Algo errado com a música")
        console.log(err);
    })
})

router.delete('/delete',(req,res)=>{

})







module.exports = router;