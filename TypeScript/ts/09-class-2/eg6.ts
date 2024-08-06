interface Bulb
{
    wattage:number;
    setWattage(wattage:number):void;
    getWattage():number;
}
class  AABulb
{
    wattage:number;
    constructor(){
        this.wattage = 0
    }
    setWattage(wattage:number)
    {
        this.wattage = wattage;
    }
}

function eg6(){
    let b:Bulb;
    b = new AABulb();
    b.setWattage(60);
}
eg6();
/*
 Property 'getWattage' is missing in type 'AABulb' but required in type 'Bulb'.
*/