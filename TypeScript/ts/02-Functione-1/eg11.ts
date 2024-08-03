function someEg11(a:number)
{
	if(a>10)
		return a*a;
	return "Useless";
}

function eg11()
{
	let a:any;
	let b:any;
	a = someEg11(5);
	b = someEg11(20);
	console.log(a);
	console.log(b);
}


eg11();

