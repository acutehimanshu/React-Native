interface keyValue{
    [x:string]:number;
}
function eg9(){
    let k:keyValue;
    k={}
    k.cool=50;
    k.wool=100;
    console.log(k);
}
eg9();