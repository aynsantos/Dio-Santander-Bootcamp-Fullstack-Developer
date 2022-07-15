const pessoa = {
    nome: 'Allyson',
    idade: 32,
    profissao: 'developer'
}

pessoa.idade = 25;

const isabela: {nome: string, idade: number, profissao: string} = {
    nome: 'Isabela',
    idade: 27,
    profissao: 'Gerente de Projeto'

}

const harry: {nome: string, idade: number, profissao: string} = {
    nome: 'Harry',
    idade: 2,
    profissao: 'Developer'

}


enum Profissao {
    GerenteDeProjeto,
    Developer,
    Medico,
    Atirador

}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const catarina: Pessoa = {
    nome: 'Catarina',
    idade: 60,
    profissao: Profissao.Medico
}



const zavala: Estudante = {
    nome: 'Zavala',
    idade: 40,
    profissao: Profissao.Atirador,
    materias: ['Arco', 'Programação']
}

const Ikora: Estudante = {
    nome: 'Ikora',
    idade: 40,
    materias: ['Arco', 'Programação']
}


function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item);
    }
}

listar(Ikora.materias);