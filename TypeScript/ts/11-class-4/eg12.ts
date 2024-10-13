class aaa{
    static x:number;
    
}

function eg12(){
    console.log(aaa.x);
    aaa.x=10;
    console.log(aaa.x);
}
eg12();

// we can access directly static memebers with classname