interface AdderCallSingature
{
    (e: number, f: number): number;
}
function justDoIt(x: number, y: number, z: number): number
{
    return x+y+z;
}

function eg2(){
    let adder: AdderCallSingature;
    adder = justDoIt; // incorrect
    let result : number;
    result = adder(10,20, 30); // incorrect
    console.log(result);
}

eg2();

/*
Line 12:  Type '(x: number, y: number, z: number) => number' is not assignable to type 'AdderCallSingature'.
  Target signature provides too few arguments. Expected 3 or more, but got 2.

  Line 14: Expected 2 arguments, but got 3.

  */