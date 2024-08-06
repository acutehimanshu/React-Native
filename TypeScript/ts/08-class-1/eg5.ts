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
    setWattage(wattage:number):void
    {
        this.wattage = wattage;
    }
}
function eg5(){
    let b:Bulb; 
    b = new Bulb();
    b.printBrand();
}
eg5();

/*
*/