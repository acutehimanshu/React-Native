class aaa{
    x:number
    constructor(x:number){
        this.x = x;
    }
}


class bbb extends aaa{
}

function eg16(){
let a:aaa; 
a = new aaa(10); 
let b:bbb;
b = new bbb(); // ERROR 
}
eg16();