//construction execution sequence
class aaa{
    constructor(){
        console.log('base class constructor');
        
    }
}

class bbb extends aaa{
    constructor(){
        console.log('Derived class constructor');
        super();
        console.log('Cool things');
        
    }
}

function eg11(){
let b:bbb; 
b = new bbb();
}
eg11();

/*
Derived class constructor
base class constructor
cool things
*/