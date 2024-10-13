//construction execution sequence
class aaa{
    constructor(){
        console.log('base class constructor');
        
    }
}

class bbb extends aaa{
    constructor(){
        super();
        console.log('Derived class constructor');
        
    }
}

function eg10(){
let b:bbb; 
b = new bbb();
}
eg10();

/*
base class constructor
Derived class constructor
*/