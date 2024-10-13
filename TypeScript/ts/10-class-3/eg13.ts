//construction execution sequence
class aaa{
    x:number;
    constructor(){
        console.log('base class constructor');
        this.x=10;
    }
}

class bbb extends aaa{
    y:number;
    constructor(){
        console.log('Derived class constructor');
        this.y = 20; // ERROR here 
        super();
        
        
    }
}

function eg13(){
let b:bbb; 
b = new bbb();
}
eg13();