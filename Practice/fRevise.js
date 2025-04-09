//combining multiple function to get a new function

function addFive(x){
    return x+5;
}
function multiplyByTwo(x){
    return x * 2;
}

// combine the 2 functions

let result= multiplyByTwo(addFive(3));
console.log(`The composed function is: ${result}`)