function eg9()
{
type WattageType = {
	wattage:number,
}
type BrandType = {
	brand:string,
}
let bulb = {
	wattage:60,
	brand:"Philips",
}
let a:WattageType=bulb;
let b:BrandType=bulb;
console.log(typeof a.wattage);
console.log(typeof a.brand); // error
console.log(typeof b.wattage); // error
console.log(typeof b.brand);

console.log(a.wattage);
console.log(a.brand); // error
console.log(b.wattage); // error
console.log(b.brand);
}
eg9();

/*

eg9.ts:16:22 - error TS2339: Property 'brand' does not exist on type 'WattageType'.

16 console.log(typeof a.brand);
                        ~~~~~

eg9.ts:17:22 - error TS2339: Property 'wattage' does not exist on type 'BrandType'.

17 console.log(typeof b.wattage);
                        ~~~~~~~

eg9.ts:21:15 - error TS2339: Property 'brand' does not exist on type 'WattageType'.

21 console.log(a.brand);
                 ~~~~~

eg9.ts:22:15 - error TS2339: Property 'wattage' does not exist on type 'BrandType'.

22 console.log(b.wattage);
                 ~~~~~~~

*/