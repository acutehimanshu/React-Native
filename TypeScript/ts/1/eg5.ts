function eg5()
{
	let gender:"Male"|"Female";
	gender = "Male";
	console.log(gender)
	gender = "Female";
	console.log(gender)
	gender = "m"; // incorrect
	gender = 10;// incorrect
}
eg5();


/*
eg5.ts:8:2 - error TS2322: Type '"m"' is not assignable to type '"Male" | "Female"'.

8  gender = "m";
   ~~~~~~


Found 1 error in eg5.ts:8
here it is taking "male and female as data type of the gender"
you can not assign any other valuee then given values.


*/