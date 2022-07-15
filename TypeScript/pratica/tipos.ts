type input = number | string;


function addValue (input1: input, input2: input) {
    if (typeof input1 === "string" || typeof input2 === "string"){
        return input1.toString() + input2.toString();
    } else {
        return input1 + input2;
    }
    

}


console.log(addValue(1, 5));
console.log(addValue('Hello ',', everything okay?'));
console.log(addValue('Que dia é hoje? ',5));