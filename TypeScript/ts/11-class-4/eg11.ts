class aaa{
    private sam():void{
        console.log("Great");
    }

    public tom():void{
        console.log("cool");
    }
    
}

function eg11(){
    let a:aaa;
    a = new aaa();
    a.sam(); // can not access private memeber
    a.tom();
}
eg11();