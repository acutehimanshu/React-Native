interface keyValue{
    city:number
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

/*
if we define any property in interface
then its mendatory to add that property at time of declation

Error:
Property 'city' is missing in type '{}' but required in type 'keyValue'.

*/