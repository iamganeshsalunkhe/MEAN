// create a object by using an object 

const car = new Object()
car.model = 'I20'
car.company= 'Hyundai'
car.price = 9.0


// method (property pointing to a function)

car.printInfo = function(){
    console.log(`model :${this.model}`);
    console.log(`company :${this.company}`);
    console.log(`price :${this.price}`);

}


// overriding tostring function 
car.toString = function(){
    return `car [model = ${this.model}, company = ${this.company}, price = ${this.price}]`
}


console.log(`car : ${car}, type:${typeof(car)}`);

car.printInfo()

// create an object by using JSON

const person = {
    name:'person1', 
    age:24,
    address:"Pune",
    printInfo: function(){
        console.log(`name:${this.name}`);
        console.log(`age:${this.age}`);
        console.log(`address:${this.address}`);
    },

    // overriding tostring
    toString:function(){
        return `Person [name :${this.name}, age:${this.age}, address:${this.address}]`
    }
}


console.log(`person:${person}, type:${typeof(person)}` );
console.log(`------------------------------------------`);
// create an object by using constructor function 


function mobile (brand , model,price){
    this.brand = brand
    this.price = price
    this.model = model
}

mobile.prototype.canAfford = function(){
        if (this.price < 50000){
            console.log(`Hello there`);
        }else{
            console.log(`Not in touch`);
        }
    }


const mobile1 = new mobile('OnePlus', "11R", 35000)
mobile1.canAfford()

console.log(mobile1);