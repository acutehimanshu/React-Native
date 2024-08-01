function eg10()
{
	type student={
		firstName:string,
		// lastName:string,
		lastName?:string, // here we are giving optional value 
	}
	let a:student={
		firstName:"Rahul"
	}
}
eg10();

/*

lastName:string,

due to this line we will get error

but when we put ? 
then it will take value as optional

lastName?:string,
*/