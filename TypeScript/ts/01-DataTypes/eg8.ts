function  eg8()
{
type Bulb = {
	wattage:number;
	brand:string;
}
let b:Bulb;
b={
	wattage:60,
	brand:"Philips",
}
console.log(b);
let c:Bulb;
c={
	wattage:100,
}
console.log(c);
let d:Bulb;
d={
	wattage:60,
	brand:"Philips",
	price:"20"
}
console.log(d);
}
eg8();

/*

eg8.ts:14:1 - error TS2741: Property 'brand' is missing in type '{ wattage: number; }' but required in type 'Bulb'.

14 c={
   ~

  eg8.ts:5:2
    5  brand:string;
       ~~~~~
    'brand' is declared here.

eg8.ts:22:2 - error TS2353: Object literal may only specify known properties, and 'price' does not exist in type 'Bulb'.

22  price:"20"
    ~~~~~


Found 2 errors in the same file, starting at: eg8.ts:14


above error while compile ts code
where as we are getting response in JS file

{ wattage: 60, brand: 'Philips' }
{ wattage: 100 }
{ wattage: 60, brand: 'Philips', price: '20' }
*/