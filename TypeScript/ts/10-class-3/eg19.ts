class aaa{
    x:number
    constructor(x:number){
        this.x = x;
    }
}


class bbb extends aaa{
    constructor(){
        super(10)
    }
}

function eg19(){
let a:aaa; 
a = new aaa(10); 
let b:bbb;
b = new bbb();
console.log(a.x);
console.log(b.x);
}
eg19();
/*
10
10
*/