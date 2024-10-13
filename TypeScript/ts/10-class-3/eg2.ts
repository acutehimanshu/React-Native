// this code will compoile
class aaa{
sam():void{
    console.log("Great");
    
}
}
class bbb extends aaa {

}

function eg2(){
    let a:aaa;
    let b:bbb;
    a = new bbb();
    b = new aaa();
}
eg2();