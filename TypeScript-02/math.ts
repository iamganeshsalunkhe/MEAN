export class Math{

    private p1:number
    private p2:number

    constructor(p1:number,p2:number){
        this.p1 = p1
        this.p2 = p2
    }


    public add(p1,p2){
        console.log(p1+p2);
    }

    public subtract(p1,p2){
        console.log(p1-p2);
    }
    public multiply(p1,p2){
        console.log(p1*p2);
    }

    public divide(p1,p2){
        console.log(p1/p2);
    }
}

export const pi = 3.14