
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


num = [10,20,30,40,50]
console.log(typeof(num));

c_name = ['INDIA',,'USA','RUSSIA']
console.log(typeof(c_name));


function Array_method(){
    const num = [10,20,30,40,50]
    
    // push (add at last position)
    num.push(60)
    num.push(70)
    console.log(num);
    // delete the last value
    num.pop()
    console.log(num);

    // delete a value by index position

    num.splice(2,1)
    console.log(num);
    // 2 => indicates the index number to start removing
    // 1 => indicates the how many numbers to remove from index number



}
Array_method()



// for of

let numbers = [11,22,33,44,55]


for (const num of numbers) {
    console.log(num);
}

console.log(`---------------------------------`);

// for Each

numbers.forEach(num => {
    console.log(num);
});

console.log(`-------------------------------------------------`);

// for loop


for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    console.log(element);
}

