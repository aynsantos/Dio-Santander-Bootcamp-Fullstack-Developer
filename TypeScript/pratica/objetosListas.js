"use strict";
const pessoa = {
    nome: 'Allyson',
    idade: 32,
    profissao: 'developer'
};
pessoa.idade = 25;
const isabela = {
    nome: 'Isabela',
    idade: 27,
    profissao: 'Gerente de Projeto'
};
const harry = {
    nome: 'Harry',
    idade: 2,
    profissao: 'Developer'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["GerenteDeProjeto"] = 0] = "GerenteDeProjeto";
    Profissao[Profissao["Developer"] = 1] = "Developer";
    Profissao[Profissao["Medico"] = 2] = "Medico";
    Profissao[Profissao["Atirador"] = 3] = "Atirador";
})(Profissao || (Profissao = {}));
const catarina = {
    nome: 'Catarina',
    idade: 60,
    profissao: Profissao.Medico
};
const zavala = {
    nome: 'Zavala',
    idade: 40,
    profissao: Profissao.Atirador,
    materias: ['Arco', 'Programação']
};
const Ikora = {
    nome: 'Ikora',
    idade: 40,
    materias: ['Arco', 'Programação']
};
function listar(lista) {
    for (const item of lista) {
        console.log('- ', item);
    }
}
listar(Ikora.materias);
