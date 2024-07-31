function eg8_some(x:number):[string, number]
{
    return ["square", x*x];
}

function eg8(){
    let a:[string, number];
    a = eg8_some(5);
    console.log(a);
    
    let b = eg8_some(10); // here we are not assigning type to b  but as we calling eg8_some so its type changes
    console.log(b);

    let c = ["Good", 20];
    b = c; // so we can not assign here because both have different data types.
    
}
eg8();


/**
 - error TS2322: Type '(string | number)[]' is not assignable to type '[string, number]'.
  Target requires 2 element(s) but source may have fewer.

15     b = c; // so we can not assign here because both have different data types.
       ~

 * /