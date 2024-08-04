interface aaa
{
    x:number;
}
interface bbb extends aaa
{
    y:number;
}
function eg12(){
    let a:bbb;
    // following is incorrect
    // y is required and z is not.
    a={
        x:10,
        z:20
    }
    console.log(a);
    
}
eg12();