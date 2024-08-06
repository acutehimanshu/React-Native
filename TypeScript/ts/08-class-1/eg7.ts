// for compiling use tsc --strict name.ts
class Bulb
{
    wattage:number;
    constructor()
    {
        this.wattage = 0;
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
function eg7(){
    let b:Bulb; 
    b = new Bulb();
    b.setWattage(60);
    b.printBrand();
}
eg7();