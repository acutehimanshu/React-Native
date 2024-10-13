//construction execution sequence
class aaa{
    constructor(){
        console.log('base class constructor');
        
    }
}

class bbb extends aaa{
    
}

function eg8(){
let b:bbb; 
b = new bbb();
}
eg8();

/*
base class constructor
*/