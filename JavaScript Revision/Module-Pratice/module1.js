function add(a,b){
    console.log(`Addition ${a+b}`)
}

function subtract(a,b){
    console.log(`Subtraction ${a -b}`);
}

function multiply(a,b){
    console.log(`Multiplication ${a * b}`);
}

function divide(a ,b){
    console.log(`Dividation ${a / b}`);
}

// exporting the required function 

module.exports = {
    add:add,
    subtract:subtract,
    multiply:multiply,
    divide:divide
}
