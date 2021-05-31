const express = require("express");

const rotaAluno = express.Router();

rotaAluno.get("/", (req, res, next) => {
  res.render("cadastroDeAluno");
});
rotaAluno.post("/", (req, res, next) => {
  res.render("cadastroDeAluno");
});
rotaAluno.delete("/", (req, res, next) => {
  res.render("cadastroDeAluno");
});

module.exports = rotaAluno;