class Employee{
    // properties

    private _name :string
    private _id:number
    private _email :string



    // constructor 
    public constructor (id:number,name:string, email:string){
        this._id = id
        this._email = email
        this._name = name 
    }
    // setter 


    set Name (name:string){this._name = name}

    set id (id:number){this._id = id}

    set email(email:string){this._email= email}

    // getter 

    get name():string{return this._name}

    get id():number {return this._id}

    get email():string{return this._email}

    // facilator

    public printInfo(){
        console.log(`id:${this._id}`);
        console.log(`name:${this._email}`);
        console.log(`email:${this._email}`);
    }
}


class Company{
    private _employees:Employee[]
    private _name:string
    private _address:string


    // constructor
    public constructor(name:string,address:string){
        this._employees = []
        this._name = name
        this._address = address 
    }
    // facilator

    public addEmployee(id:number,email:string,name:string){
        const empployee = new Employee(id,name,email)
        this._employees.push(empployee)
    }

    public printEmployees(){
        for (const employee of this._employees) {
                employee.printInfo()
        }
    }

    public printInfo(){
        console.log(`name:${this._name}`);
        console.log(`address:${this._address}`);
        console.log(`----------------------------------`);
    }
} 

const c1 = new Company('company1', 'Pune')

c1.addEmployee(1, 'emp1', 'em1@test.com')

c1.addEmployee(2, 'emp2', 'em2@test.com')

c1.addEmployee(3, 'emp3', 'em3@test.com')

c1.addEmployee(4, 'emp4', 'em4@test.com')

c1.printInfo()
c1.printEmployees()
