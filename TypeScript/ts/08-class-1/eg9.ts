// for compiling use tsc --strict name.ts
class Bulb
{
    wattage:number;
    price!:number
    constructor()
    {
        this.wattage = 0;
        console.log(`Bulb Instantiated `);
        
    }
    setWattage(wattage:number)
    {
        this.wattage = wattage;
    }
    setPrice(price:number)
    {
        this.price = price;
    }
    printInfo():void
    {
        console.log(`Philips and wattage is ${this.wattage}`);
        if(this.price)
            console.log(`Price is ${this.price}`);
            
    }
}
function eg9(){
    let b:Bulb; 
    b = new Bulb();
    b.setWattage(60);
    b.setPrice(10);
    b.printInfo();
}
eg9();