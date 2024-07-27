function some_eg3(a:string, b?:number)
{
	console.log(`a is ${a} and b is ${b}`);
}
function eg3()
{
	some_eg3("Great");
	some_eg3("Good", 30);
	some_eg3("Good"); 

}
eg3();

/*

a is Great and b is undefined
a is Good and b is 30
a is Good and b is undefined
*/