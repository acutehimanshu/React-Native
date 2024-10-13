//construction execution sequence
class aaa{
    constructor(){
        console.log('base class constructor');
        
    }
}

class bbb extends aaa{
    constructor(){
        console.log('Derived class constructor');
        
    }
}

function eg9(){
let b:bbb; 
b = new bbb();
}
eg9();

/*
to use base class consttuctor we have to call super explicitely
*/