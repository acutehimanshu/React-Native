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
}

function eg3(){
    let b:Bulb;
    b = new AABulb();
    b.setWattage(60);
    console.log(b.getWattage());
    
}
eg3();