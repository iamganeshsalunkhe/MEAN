class Person1{
    private _name:string
    private _age:number
    private _address:string

    // constructor

    constructor(name:string='', age:number=0,address:string=''
    ){
         this._name = name
         this._age = age
         this._address = address
    }

    // getter

    public get Name(){return this._name}
    public get address(){return this._address}  
    public get age(){return this._age}
    
    // settter
    public set Name(name:string){
        this._name = name
    }
    public set address(address:string){
        this._address = address
    }
    public set age(age:number){
        if ((age > 0) && (age <=100)){
            this._age  = age
        }
    }

    // Facilitator

    printInfo(){
        console.log(`name:${this._name}`);
        console.log(`Age:${this._age}`);
        console.log(`Address:${this._address}`);
    }
}



const p3=  new Person1('Ganesh', 30, 'Sangli') 

p3.printInfo()

const p4 = new Person1('Akash', 29,'Mumbai')
p4.printInfo()