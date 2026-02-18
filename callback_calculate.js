function calculate(a,b, operation){
    return operation(a,b);
}

function add(x,y){
    return x+y;
}

function subtract(x,y){
    return x-y;
}

console.log(calculate(5,3,add));
console.log(calculate(5,3,subtract));