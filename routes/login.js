const express = require("express");
const rotaLogin = express.Router();

var login = "admin";
var password = "123456";

rotaLogin.post('/', (req, res) => {

  if(req.body.password == password && req.body.login == login) {
      //logado com sucesso
      req.session.login = login;
      res.render('logado', {login: login});
  } else {
      res.render('index');
  }

});

rotaLogin.get("/", (req, res, next) => {
  
  if(req.session.login) {
      res.render("logado");
      console.log('o meu usuário logado é: '+ req.session.login);
  } else {
      res.render("index");
  }
});

rotaLogin.post('/:login/:senha', (req, res) => {

  if(req.params.senha == senha && req.params.login == login) {
      //logado com sucesso
      req.params.login = login;
      res.render('logado', {login: login});
  } else {
      res.render('index');
  }

});

rotaLogin.get("/:login/:senha", (req, res, next) => {
  
  if(req.params.login && req.params.senha) {
      res.render("logado");
      console.log('o meu usuário logado é: '+ req.params.login);

  } else {
      res.render("index");
  }
});

module.exports = rotaLogin;