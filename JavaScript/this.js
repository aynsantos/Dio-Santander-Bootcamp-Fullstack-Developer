function calculaIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } anos de idade.`;
}

const pessoa1 = {
  nome: 'Maria',
  idade: 30,
};

const pessoa2 = {
  nome: 'Carla',
  idade: 26,
};

const animal = {
  nome: 'Harry',
  idade: 5,
  raca: 'Border collie',
};

console.log(calculaIdade.apply(animal, [5]));