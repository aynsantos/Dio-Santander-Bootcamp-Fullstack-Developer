"use strict";
// Definindo o retorno de uma função como NUMBER
/*function addValueNumeric (numero1: number, numero2: number): number {
   return numero1 + numero2;
}

console.log(addValueNumeric(1, 3));*/
//Função do tipo VOID
function printValuesNumeric(numero1, numero2) {
    console.log(numero1 + numero2);
}
function addValueNumericCallBack(numero1, numero2, callback) {
    let resultado = numero1 + numero2;
    return callback(resultado);
}
function squared(numero) {
    return numero * numero;
}
function shareHimself(numero) {
    return numero / numero;
}
console.log(addValueNumericCallBack(1, 3, squared));
console.log(addValueNumericCallBack(1, 3, shareHimself));
