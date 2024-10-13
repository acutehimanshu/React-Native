// last scenenrio but this wtime with variable
class aaa{
    x:number;
}
class bbb extends aaa {
}

function eg4(){
    let a:aaa;
    let b:bbb;
    a = new bbb();
    b = new aaa(); 
}
eg4();