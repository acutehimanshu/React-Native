class aaa{
    x:number
    constructor(x:number){
        this.x = x;
    }
}


class bbb extends aaa{
}

function eg15(){
let a:aaa; 
a = new aaa(); // ERROR
let b:bbb;
b = new bbb(); // ERROR 
}
eg15();