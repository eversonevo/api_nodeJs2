const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).send({
        mensagem:'Usando o get dentro da rota produtos'
    });
});

router.post('/',(req,res,next) => {
    res.status(201).send({
        mensagem:'Usando o post dentro da rota produtos'
    });
});

router.get('/:id_produto',(req,res,next) => {
    res.status(201).send({
        mensagem:'Usando o get de um produto excluisvo',
        id: req.params.id_produto
    });
});

router.patch('/:id_produto',(req,res,next) => {
    res.status(201).send({
        mensagem:'Alterando produto',
        id: req.params.id_produto
    });
});

router.delete('/:id_produto',(req,res,next) => {
    res.status(201).send({
        mensagem:'Excluindo produto ',
        id: req.params.id_produto
    });
});

module.exports = router;