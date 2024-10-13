class aaa{
    sam():void{
        console.log("Great");
        
    }
}

class bbb extends aaa{
    sam(y:number):number{
        return 20;
    }
}

function eg22(){
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
eg22();

/*
Great
undefined
20
20
*/
