const express = require('express');
const app = express();
const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false})); //apenas dados simples
app.use(bodyParser.json()); // só vai aceitar json na entrada do body

// permissões de cabeçalhos  // tratamento de CORS
app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*'); // todos tem acesso
    res.header('Access-Control-Allow-Header','Content-Type','Origin','X-Requested-With','Accept','Authorization'); // cabeçalhos especificos

    if (req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,DELETE,GET,PATCH');
        return res.status(200).send({});
    }

    next();
    
});

app.use('/produtos',rotaProdutos);
app.use('/pedidos',rotaPedidos);


// quando não encontra rota (morgan fica verificando rotas)
app.use((req,res,next) => {
    const erro = new Error('Rota não ecnontrada');
    erro.status = 404;
    next(erro);
});

app.use((error, req,res,next) => {
    res.status(error.status || 500);
    return res.send({
        erro:{
            mensagem:error.message
        }
    });

});


module.exports = app;
