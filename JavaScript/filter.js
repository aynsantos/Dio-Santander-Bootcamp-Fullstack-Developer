function filtraPares (arr) {
    return arr.filter(callback);
}

function callback(item){
    return item % 2 === 0;
}

const myArray = [1, 21, 22, 26, 80, 100, 101, 102];

console.log(filtraPares(myArray));