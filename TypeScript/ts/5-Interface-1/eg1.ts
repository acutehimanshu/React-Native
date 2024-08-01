function eg1(){
	type Student = {
		rollNumber:number;
		name:string;
	}
	interface Employee{
		id:string;
		name:string;
	}
	let a:Student;
	let b:Employee;
	a = {
		rollNumber:101,
		name:"Ramesh"
	};
	b={
		id:"A1001",
		name:"Suresh"
	};
	console.log(a);
	console.log(b);
}
eg1();


/*

{ rollNumber: 101, name: 'Ramesh' }
{ id: 'A1001', name: 'Suresh' }

*/