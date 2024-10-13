class aaa{
    sam():void{
        console.log("Great");
        
    }
}

class bbb extends aaa{
    sam():number{
        return 20;
    }
}

function eg21(){
    let a:aaa;
    let b:bbb;
    a = new aaa();
    a.sam();
    a = new bbb();
    a.sam();
    // b = new aaa();
    // b.sam();
    b = new bbb();
    b.sam();

}
eg21();

/*
Great
undefined
20
20
*/
