interface Bulb
{
    wattage:number;
    setWattage(wattage:number):void;
    getWattage():number;
}
function eg()
{
    let b:Bulb;
    b = new Bulb(); // incorrect interface cannot instantiated.
}
/*
 'Bulb' only refers to a type, but is being used as a value here.
 we can not make object of an interface 
*/