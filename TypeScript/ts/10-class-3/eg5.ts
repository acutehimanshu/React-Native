// last scenenrio but this wtime with variable
class aaa{
    x:number;
}
class bbb extends aaa {
    y:number;
}

function eg5(){
    let a:aaa;
    let b:bbb;
    a = new bbb();
    b = new aaa(); // ERROR here same as eg3
}
eg5();