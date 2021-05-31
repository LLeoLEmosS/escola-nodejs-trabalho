const express = require("express");

const rotaProfessor = express.Router();

rotaProfessor.get("/", (req, res, next) => {
  res.render("cadastroDeProfessor");
});
rotaProfessor.post("/", (req, res, next) => {
  res.render("cadastroDeProfessor");
});




module.exports = rotaProfessor;