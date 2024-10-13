class aaa{
    sam():void{
        console.log("Great");
        
    }
}

class bbb extends aaa{
    sam():void{
        console.log("cool");
        
    }
}

function eg20(){
    let a:aaa;
    let b:bbb;
    a = new aaa();
    a.sam();
    a = new bbb();
    a.sam();
    b = new aaa();
    b.sam();
    b = new bbb();
    b.sam();

}
eg20();

/*
Great
cool
cool
Great
*/
