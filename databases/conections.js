const Sequelize = require("sequelize");
const sequelize = new Sequelize('cadastros', 'root', '@#$leolemos92', {
    host: 'localhost',
    dialect: 'mysql'
});

const professores = sequelize.define('cadastros', {
    nome: {
        type: Sequelize.STRING
    },
    disciplina: {
        type: Sequelize.STRING
    },
    curso: {
        type: Sequelize.STRING
    },
    turno: {
        type: Sequelize.STRING
    }
});

const alunos = sequelize.define('cadastros', {
    nome: {
        type: Sequelize.STRING
    },
    disciplina: {
        type: Sequelize.STRING
    },
    curso: {
        type: Sequelize.STRING
    },
    turno: {
        type: Sequelize.STRING
    }
});
