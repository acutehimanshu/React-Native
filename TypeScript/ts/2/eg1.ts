function some_eg1(a)
{
	console.log(typeof a);
	console.log(`Value of a is ${a}`);
}

function eg1()
{
	some_eg1(10);
	some_eg1("Great");
	some_eg1(false);
	some_eg1({name:"Gopal"});
	some_eg1(null);
	some_eg1(undefined);
}
eg1();

/*

number
Value of a is 10
string
Value of a is Great
boolean
Value of a is false
object
Value of a is [object Object]
object
Value of a is null
undefined
Value of a is undefined

*/