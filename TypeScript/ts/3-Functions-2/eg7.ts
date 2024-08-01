function eg7()
{
let x:number;
x = [10,20,"good"];
console.log(x);
}
eg7();


/*eg7.ts:4:1 - error TS2322: Type '(string | number)[]' is not assignable to type 'number'.

4 x = [10,20,"good"];
  ~


Found 1 error in eg7.ts:4?*/