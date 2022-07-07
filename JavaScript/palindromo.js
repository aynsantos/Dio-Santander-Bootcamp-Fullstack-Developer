//Solução 01

function palindromo (string){
    if (!string) return "string inexistente"

    return string.split("").reverse().join ("") === string;
}

// Console log aqui \/ para solução 01


//Solução 02

function verificaPalindromo (string){
    if (!string) return "string inexistente";
    
    for (let i = 0; i < string.length / 2; i++) {
        
        if(string[i] !== string[string.length -1 - i]){
        return false;

        }

    }

    return true;
}


// Console log aqui \/ para solução 02
console.log(verificaPalindromo("abba"));