class Bulb
{
    wattage:number;
    constructor(wattage:number)
    {
        this.wattage = wattage;
        console.log(`Bulb Instantiated and wattage set to ${this.wattage} `);
        
    }
    printBrand():void
    {
        console.log(`Philips and wattage is ${this.wattage}`);
    }
}
function eg3(){
    let b:Bulb; 
    // b = new Bulb(); // incorrect
    b = new Bulb(60);
    b.printBrand();
}
eg3();