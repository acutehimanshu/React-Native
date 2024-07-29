function eg8(){
    let x:(number | string)[];
    x = [10,20,30];
    console.log(x);
    let y:(number | string)[];
    y = ["God","Is","Great"];
    console.log(y);
    let z:(number | string)[];
    z = ["God is great", 10];
    console.log(z);
    z = [20, "God is great", 10];
    console.log(z);

    let p: number[] | string[];// p can be either an array of string or number not mix
    p = [10, "God is great"]; // incorrect
    console.log(p);
    p = [ "God is great", 10]; // incorrect
    console.log(p);

    p = [ "God is great", "Ujjain is city"]; // correct
    console.log(p); 
    p = [ 100, 200, 10]; // correct
    console.log(p);

}
eg8();

/**
 * eg9.ts:15:5 - error TS2322: Type '(string | number)[]' is not assignable to type 'string[] | number[]'.
  Type '(string | number)[]' is not assignable to type 'string[]'.
    Type 'string | number' is not assignable to type 'string'.
      Type 'number' is not assignable to type 'string'.

15     p = [10, "God is great"];
       ~


Found 1 error in eg9.ts:15


 */