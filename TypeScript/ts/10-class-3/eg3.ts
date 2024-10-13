class aaa{
    sam():void{
        console.log("Great");
        
    }
}
class bbb extends aaa {
    tom():void{
        console.log("Good");
        
    }
}

function eg3(){
    let a:aaa;
    let b:bbb;
    a = new bbb();
    b = new aaa(); // we can not access bbb elements from b pointer
}
eg3();

/**
ERROR
Property `tom` is missing in type aaa but required in type bbb
*/