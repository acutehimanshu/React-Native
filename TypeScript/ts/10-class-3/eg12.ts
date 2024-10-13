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
        super();
        this.y = 20;
        
    }
}

function eg12(){
let b:bbb; 
b = new bbb();
}
eg12();

/*
Derived class constructor
base class constructor
*/