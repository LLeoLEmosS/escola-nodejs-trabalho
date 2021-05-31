const express = require("express");

const secretaria = express.Router();

secretaria.get("/", (req, res, next) => {
  res.status(200).send("secretaria");
});

secretaria.get("/cadastros", (req, res, next) => {
  res.status(200).send("area de cadastros");
});

secretaria.get("/cadastros/cadastro-de-professores", (req, res, next) => {
  res.status(200).send("cadastros de professor");
  console.log("cadastro do professor");
});

secretaria.get("/cadastros/cadastro-de-alunos", (req, res, next) => {
  res.status(200).send("cadastros de aluno");
});

module.exports = secretaria;