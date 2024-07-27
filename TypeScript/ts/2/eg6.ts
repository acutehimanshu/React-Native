function someEg6(a:string, b=20)
{
	console.log(a);
	console.log(b);
}

function eg6()
{
	someEg6("Good", 100);
	someEg6("Great");
}
eg6();

/*

Good
100
Great
20

*/