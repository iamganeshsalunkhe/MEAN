// template to create an object

// collection of properties and methods

class Person{
    // can't use const and let in class
    name:string
    age:number
    address:string

    // method
    canvote(){
        if (this.age >=18){
            console.log(`${this.name} is eligible for vote`);
        }else{
            console.log(`${this.name} is NOT eligible for vote.`);
        }
    }

    printInfo(){
        console.log(`Name:${this.name}`);
        console.log(`address:${this.address}`);
        console.log(`Age:${this.age}`);

    }
}
// creating  an object of class function
const p1 = new Person()


// assigning properties

p1.name= 'Ganesh'

p1.age = 25

p1.address ='Pune'

p1.canvote()

p1.printInfo()

console.log(`------------------------------------`);
const p2 = new Person()

p2.name ='Akash'

p2.age = 17
p2.address='Mumbai'
p2.canvote()
p2.printInfo()