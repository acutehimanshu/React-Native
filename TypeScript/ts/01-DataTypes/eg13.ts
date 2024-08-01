function eg13()
{
	type Student={
		name:string,
		city:string,
		dataType?:"Student"
	};
	let s:Student;
	s = {
		name:"Ramesh",
		city:"Ujjain",
		dataType:"Student"
	};
	console.log(s);
	console.log(typeof s);
	/*
	if(typeof s == "Student")
		console.log("S is of type Student");
	else
		console.log("S is not of type Student");
	//	eg13.ts:16:5 - error TS2367: This comparison appears to be unintentional because the types '"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"' and '"Student"' have no overlap.
	//
	// 16  if(typeof s == "Student")
	//       ~~~~~~~~~~~~~~~~~~~~~
    //
	//
	// Found 1 error in eg13.ts:16
	*/
	if(s.dataType == 'Student')
		console.log("S is of type Student");
	else
		console.log("S is not of type Student");

}
eg13();