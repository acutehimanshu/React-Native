interface Bulb
{
    wattage:number;
    setWattage(wattage:number):void;
    getWattage():number;
}
class  AABulb implements Bulb
{
    wattage:number;
    constructor(){
        this.wattage = 0
    }
    setWattage(wattage:number)
    {
        this.wattage = wattage;
    }
    getWattage():number{
        return this.wattage;
    }
    printBrand():void
    {
        console.log("Philips");
        
    }
}

function eg4(){
    let b:Bulb;
    b = new AABulb();
    b.setWattage(60);
    console.log(b.getWattage());
    b.printBrand();
    
}
eg4();

/*
 error TS2339: Property 'printBrand' does not exist on type 'Bulb'.
 */