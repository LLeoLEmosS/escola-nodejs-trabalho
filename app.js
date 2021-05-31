const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const rotaAluno = require("./routes/cadastroDeAluno");
const rotaProfessor = require("./routes/cadastroDeProfessor");
const rotaLogin = require("./routes/login");

app.use(session({secret: "abcde"}));
app.use(bodyParser.urlencoded({extended: true}));

app.engine("html", require("ejs").renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));


app.use('/login', rotaLogin);
app.use('/cadastro-de-professsor', rotaProfessor);
app.use('/cadastro-de-aluno', rotaAluno);

app.get('/', (req, res) => {
    res.send('APIs com nodeJs');
});
app.post('/', (req, res) => {
    res.send('APIs com nodeJs');
});

module.exports = app;