/*Aliasing*/
function eg6()
{
	type Name = string; / name is an alias of string or we can say string typefed to name
	let firstName:Name;
	let lastName:Name;
	firstName = "Pankaj";
	lastName = "Gupta";
	firstName = 10;
}
eg6();

/*

eg6.ts:9:2 - error TS2322: Type 'number' is not assignable to type 'string'.

9  firstName = 10;
   ~~~~~~~~~


Found 1 error in eg6.ts:9
here we are using Name as alias of type string.
*/