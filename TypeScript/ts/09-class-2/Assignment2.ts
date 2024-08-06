// Class aaa extends bbb // inheritance 
class bbb
{
    wattage:number;
    constructor(){
        this.wattage = 0;
    }
    setWattage(wattage:number):void{
        this.wattage = wattage;
    }
    getWattage():number{
        return this.wattage;
    }
}

class aaa extends bbb
{
    constructor(){
        super();
    }
    setWattage(wattage:number):void{
        this.wattage = wattage*2;
    }
}
function assignment2(){
    let a;
    a = new aaa();
    a.setWattage(60);
    console.log(`Wattage is ${a.getWattage()}`);
}
assignment2();

