function subEvens (array){
    for ( let i = 0; i < array.length; i++){
        if ( array[i] === 0){
            console.log("Não pode alterar 0 para 0")
        } else if (array[i] % 2 === 0){
            console.log(`Substituindo ${array[i]} por 0...`)
            array[i] = 0;
        }
    }

    return array;
}

let test = [1, 3, 4, 6, 80, 33, 23, 90];
console.log(subEvens(test))