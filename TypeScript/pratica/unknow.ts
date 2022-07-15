let AnyAgain: any;
AnyAgain = 3;
AnyAgain = 'teste';
AnyAgain = 5;

let stringTest: string = 'verificar'
stringTest = AnyAgain;

/*Unknow ele tem uma diferença em relação ao ANY, ele na verdade é uma boa pratica.
Se vc tiver uma propriedade UNKNOW, que você não conhece, você é obrigado quando for alocar o valor para outra propriedade,
fazendo uma validação para garantir que naquele momento é do tipo que aquela propriedade espera receber*/

let unknowValue: unknown;
unknowValue = 3;
unknowValue = 'opa';
unknowValue = true;

let stringTest2: string = 'now go';

if(typeof unknowValue === 'string') {
    stringTest2 = unknowValue;
}

/*o erro throw interrompe o código/função. O tipo NEVER nunca é finalizado.*/
function playError (erro: string, codigo: number): never {
    throw {erro: erro, code: codigo}
}

playError('deu erro', 500)