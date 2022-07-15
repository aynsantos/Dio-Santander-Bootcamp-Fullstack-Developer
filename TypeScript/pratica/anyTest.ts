let valorAny: any;

valorAny = 3;
valorAny = 'Hello';
valorAny = true;

let valorString: string = 'teste';
valorString = valorAny
let valorString2: string = 'textão'
valorString2 = valorAny

function somaString ( string1: string, string2: string) {
    console.log(string1 + string2);
}

somaString(valorString, valorString2);
somaString('Hello ', ', everything okay?');


// O Any é uma má pratica.
// O any não tem garantia que o projeto será executado como deve ser.
// Typescript não proibe ANY, mas podemos usar Slint que garante que código será escrito da maneira correta e proibe o uso do ANY.