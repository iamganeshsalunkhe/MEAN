
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
console.log(`-----------------------------------------------------------`);
// Arrow Function
const square = (num) => console.log(num * num)

square(25)

function add(a){
    function add2 (b){
        console.log(a+b);
    }
    add2(3)
}
add(3)

function Greet(name){
    function message(){
        console.log(`Hello My Friend ${name}`);
    }
    message()
}
Greet('Ganesh')
Greet("Pratik")


// map (higher Order Function)

numbers = [1,2,3,4,5,6,7,8,9]

const squareofnumbers = numbers.map(i=> i*i)

console.log(squareofnumbers);



const cubeofnumbers =  numbers.map(i=>i*i*i)

console.log(cubeofnumbers);

function function6(){
    const cars = [
        {id:1,name:'Baleno',company :'MS',Price:9.5},
        {id:2,name:'Creta',company :'Hyndai',Price:15.5},
        {id:3,name:'Nexon',company :'Tata',Price:8.5},
        {id:4,name:'Ertiga',company :'MS',Price:10.5}
    ]

    cars.map(i => console.log(i.company, i.name))
    
}

function6()

// Filter (Higher Order Functions)


function function7(){
    const number = [1,2,3,4,5,6,7,8,9,10]

    const evennumbers =number.filter(i=>i%2 == 0)
    console.log(evennumbers);

    const oddnumbers = number.filter(i => i % 2 != 0)
    console.log(oddnumbers);
}

function7()


// chaining of map, filter

function function8(){
    const cars = [
    { id: 1, name: "Baleno", company: "MS", Price: 9.5 },
    { id: 2, name: "Creta", company: "Hyndai", Price: 15.5 },
    { id: 3, name: "Nexon", company: "Tata", Price: 8.5 },
    { id: 4, name: "Ertiga", company: "MS", Price: 10.5 },
    ]
    const chaining = cars.filter(i =>i.Price < 10).map(i=> [i.company,i.name])

    console.log(chaining);
}
function8()

