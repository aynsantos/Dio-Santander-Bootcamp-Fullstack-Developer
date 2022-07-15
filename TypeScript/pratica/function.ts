// Definindo o retorno de uma função como NUMBER

/*function addValueNumeric (numero1: number, numero2: number): number {
   return numero1 + numero2;
}

console.log(addValueNumeric(1, 3));*/

//Função do tipo VOID


function printValuesNumeric (numero1: number, numero2:number): void {
    console.log(numero1 + numero2)

}


function addValueNumericCallBack (numero1: number, numero2: number, callback: (numero: number) => number): number {
   let resultado = numero1 + numero2;

   return callback(resultado);
}

function squared (numero: number): number {
    return numero * numero;
}

function shareHimself( numero: number): number {
    return numero / numero
}

console.log(addValueNumericCallBack(1, 3, squared))
console.log(addValueNumericCallBack(1, 3, shareHimself))