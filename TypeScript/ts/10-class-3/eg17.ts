class aaa{
    x:number
    constructor(x:number){
        this.x = x;
    }
}


class bbb extends aaa{
}

function eg17(){
let a:aaa; 
a = new aaa(10); 
let b:bbb;
b = new bbb(50); // when we will see trasnpiled code there is argumnet passed to super if we define nothing
console.log(a.x);
console.log(b.x);
}
eg17();
/*
10
50
*/