"use strict";
var Profession;
(function (Profession) {
    Profession[Profession["developer"] = 0] = "developer";
    Profession[Profession["manager"] = 1] = "manager";
})(Profession || (Profession = {}));
var breed;
(function (breed) {
    breed[breed["BorderCollie"] = 0] = "BorderCollie";
    breed[breed["Beagle"] = 1] = "Beagle";
})(breed || (breed = {}));
let person1 = {
    name: 'Allyson',
    age: 32,
    position: Profession.developer
};
let person2 = {
    name: 'Isabela',
    age: 27,
    position: Profession.manager
};
let dog1 = {
    name: 'Harry',
    age: 2,
    Petbreed: breed.BorderCollie
};
