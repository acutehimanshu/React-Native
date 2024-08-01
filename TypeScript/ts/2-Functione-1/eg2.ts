function eg2()
{
	let a:any;
	console.log(typeof a); // Default will be undefined // a/c to Js
	a = 10;
	console.log(typeof a); // number
	a = "Great";
	console.log(typeof a); // string
}
eg2();

/*

undefined
number
string

*/