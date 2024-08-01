function eg4()
{
let a:string|number;
a = "Good";
console.log(a);
if(typeof a == "string")
	console.log("Date type of a is string");
else
	console.log("Date type of a is not string");
a = 20;
console.log(a);
if(typeof a == "number")
	console.log("Date type of a is number");
else
	console.log("Date type of a is not number");
a = "Great";
console.log(a);
if(typeof a == "string")
	console.log("Date type of a is string");
else
	console.log("Date type of a is not string");


let b = null;
if(typeof b == "null")
	console.log("Date type of a is NULL");
else
	console.log("Date type of a is not NULL");



}
eg4();

/*
eg4.ts:25:4 - error TS2367: This comparison appears to be unintentional because the types '"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"' and '"null"' have no overlap.

25 if(typeof b == "null")
      ~~~~~~~~~~~~~~~~~~


Found 1 error in eg4.ts:25
-----------------------------
here we are definfing data type as per ts
but its comparing as par javascript
means if you are comparing the type of any data
then you should use data types of javascript not ts
becase when we give type null in ts, we got type object in js
*/