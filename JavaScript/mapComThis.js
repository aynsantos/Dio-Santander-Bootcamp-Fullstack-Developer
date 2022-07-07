const maca = {
    value: 2,
}

const laranja = {
    value: 3, 
}

function mapTest (arr, thisArg) {

    return arr.map (function(item){
       return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this -> maça', mapTest(nums, maca))


console.log('this -> laranja', mapTest(nums, laranja))