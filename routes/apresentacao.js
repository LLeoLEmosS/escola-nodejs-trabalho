const express = require("express");

const apresentacao = express.Router();


apresentacao.get('/', (req, res) => {
    res.render('index');
});

apresentacao.post('/', (req, res) => {
    res.render('index');
});

module.exports = apresentacao;