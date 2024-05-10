const person2 = {
    name:'Person2',
    age:20,
    address : 'Kolhapur',
    canVote :function(){
        if (this['age'] >= 18){
            console.log(`${this.name} can vote `);
        }else{
            console.log(`${this.name} not elligible to vote`);
        }
    }
}

// person2.canVote()



// how to make Object

const person1 = new Object()
console.log(person1);
person1.name = 'Person1'
person1.age = 26
person1.address ='VIZAG'


console.log(person1);

// Using Constructor Function

function mobile (name, brand){
    this.name = name,
    this.brand = brand
}

const mobile1 = new  mobile('11R', 'Oneplus')

const mobile2 = new mobile('S21FE', 'Samsung')
console.log(mobile1);
console.log(mobile2);
