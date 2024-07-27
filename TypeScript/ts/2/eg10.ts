function someEg10(a:number)
{
	if(a>10)
		return a*a;
	return "Useless";
}

function eg10()
{
	let a:number;
	let b:string;
	a = someEg10(5);
	b = someEg10(20);
	console.log(a);
	console.log(b);
}


eg10();

/*

eg10.ts:12:2 - error TS2322: Type 'number | "Useless"' is not assignable to type 'number'.
  Type 'string' is not assignable to type 'number'.

12  a = someEg10(5);
    ~

eg10.ts:13:2 - error TS2322: Type 'number | "Useless"' is not assignable to type 'string'.
  Type 'number' is not assignable to type 'string'.

13  b = someEg10(20);
    ~


Found 2 errors in the same file, starting at: eg10.ts:12*/
