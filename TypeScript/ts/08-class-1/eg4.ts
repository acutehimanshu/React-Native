// for compiling use tsc --strict name.ts
// this example wont compile
class Bulb
{
    wattage:number;
    constructor()
    {
        console.log(`Bulb Instantiated `);
        
    }
    printBrand():void
    {
        console.log(`Philips and wattage is ${this.wattage}`);
    }
}
function eg4(){
    let b:Bulb; 
    b = new Bulb();
    b.printBrand();
}
eg4();

/*
eg4.ts:3:5 - error TS2564: Property 'wattage' has no initializer and is not definitely assigned in the constructor.

3     wattage:number;
      ~~~~~~~


Found 1 error in eg4.ts:3
*/