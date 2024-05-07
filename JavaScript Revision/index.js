
// Basic Console Log

console.log(`Hello World`);

// Variable

let a = 100
var b = 200
console.log(a);
console.log(typeof(a)); // Number(datatype)

console.log(b);
console.log(typeof(b)); // Number(datatype);

// constants 
const FirstName = 'Ganesh'

console.log(FirstName);
console.log(typeof(FirstName));  //String(datatype);


const canVote = true
console.log(canVote);
console.log(typeof(canVote)); // Boolean(datatype)

const cand1 = {
    name:'Ganesh',
    age:24,
    city:'Sangli',
    state:'Maharashtra',
    country:'India'
}
console.log(cand1);
console.log(typeof(cand1)); // Object (datatype)


// functions

// function without parameter

function  Greet(){
    console.log(`Hello!!!`);
}

Greet()


// function with parameter

function Add(a,b){
    console.log(a+b);
}

Add(10,20)

