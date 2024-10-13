class aaa{
    static x:number=50;
    
}

function eg13(){
    console.log(aaa.x);
    aaa.x=10;
    console.log(aaa.x);
}
eg13();

// we can access directly static memebers with classname