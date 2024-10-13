
class aaa{
    x:number;
}
class bbb extends aaa {
    y?:number; // change here we make it optional
}

function eg6(){
    let a:aaa;
    let b:bbb;
    a = new bbb();
    b = new aaa(); 
}
eg6();