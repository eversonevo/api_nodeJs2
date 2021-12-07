const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) => {
    res.status(200).send({
        mensagem:'Usando o get dentro da rota pedido'
    });
});

router.post('/',(req,res,next) => {
    res.status(201).send({
        mensagem:'Usando o post dentro da rota pedido'
    });
});

router.get('/:id_pedido',(req,res,next) => {
    res.status(201).send({
        mensagem:'Usando o get de um pedido excluisvo',
        id: req.params.id_pedido
    });
});

router.delete('/:id_pedido',(req,res,next) => {
    res.status(201).send({
        mensagem:'Excluindo pedido ',
        id: req.params.id_pedido
    });
});

module.exports = router;