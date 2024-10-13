
class aaa{
    x:number;
}
class bbb extends aaa {
    y?:number; // change here we make it optional
}

function eg7(){
    let a:aaa;
    let b:bbb;
    a = new bbb();
    b = new aaa(); 
    b.x = 10;
    b.y = 20; // Dynamically a property will be added 
    console.log(b.x);
    console.log(b.y);
}
eg7();