enum Profession{
    developer,
    manager,
}

enum breed {
    BorderCollie,
    Beagle,
}

type human = {
    name: string,
    age: number,
    position: Profession
}

type pet = {
    name: string,
    age: number,
    Petbreed: breed
}

let person1: human = {
    name: 'Allyson',
    age: 32,
    position: Profession.developer
};

let person2: human = {
    name: 'Isabela',
    age: 27,
    position: Profession.manager
}

let dog1: pet = {
    name: 'Harry',
    age: 2,
    Petbreed: breed.BorderCollie
}