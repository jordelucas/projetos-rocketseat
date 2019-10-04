const express = require("express");

const routes = express.Router();

routes.post('/users', (req, res) => {
    return res.json(req.body);              //json é uma estrutura de dados
});

module.exports = routes;