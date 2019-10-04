const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes')

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack09-dzxuf.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE

//No navegador so é possivel fazer testes com o método GET
//Por isso será utilizado o Insominia

/*
Tipos de requisicao
req.query = Acessar query params (para filtros)
req.params = Acessar route params (para edição, delete)
req.body = acessar corpo da requisicao (para criacao, edicao)
*/


//Indica a utilizacao do formato json
app.use(express.json());
app.use(routes);

//Porta que o servidor vai utilizar
app.listen(3333);