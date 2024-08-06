// for compiling use tsc --strict name.ts
// this example wont compile
class Bulb
{
    wattage:number;
    constructor()
    {
        console.log(`Bulb Instantiated `);
        
    }
    setWattage(wattage:number)
    {
        this.wattage = wattage;
    }
    printBrand():void
    {
        console.log(`Philips and wattage is ${this.wattage}`);
    }
}
function eg6(){
    let b:Bulb; 
    b = new Bulb();
    b.setWattage(60);
    b.printBrand();
}
eg6();