function comparaDoisNumeros (num1, num2){
    const primeira = criaPrimeiro (num1, num2);
    const segunda = criaSegunda (num1, num2);

    return `${primeira} ${segunda}`
}

function criaPrimeiro (num1, num2){
    let iguais = '';

    if(num1 !== num2){
        iguais = 'não ';
    }

    return `Os números ${num1} e ${num2} ${iguais}são iguais.`
}

function criaSegunda (num1, num2){
    const soma = num1 + num2;

    let resultDez = 'menor';
    let resultVinte = 'menor';

    const comparaDez = soma > 10;
    const comparaVinte = soma > 20;

    if(comparaDez){
        resultDez = 'maior';
    }

    if (comparaVinte){
        resultVinte = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultDez} que 10 e ${resultVinte} que 20.`
}

console.log(comparaDoisNumeros(11, 11));

