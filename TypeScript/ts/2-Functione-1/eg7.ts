function someEg7(a:string, b=20, c?:string)
{
	console.log(a);
	console.log(b);
	console.log(c);
}

function eg7()
{
	someEg7("Good", 100, "Good");
	someEg7("Great");
}
eg7();

/*

Good
100
Great
20

*/