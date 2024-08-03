interface AdderCallSingature
{
    (e:number, f:number):number;
}
function justDoIt(x:number, y:number):number
{
    return x+y;
}

function eg1(){
    let adder:AdderCallSingature;
    adder = justDoIt;
    let result : number;
    result = adder(10,20);
    console.log(result);
}

eg1();