// Can base class pointer store the address of an object created from its derived class

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
function assignment4(){
    let b:bbb; 
    b = new aaa();
    b.setWattage(60);
    console.log(`Wattage is ${b.getWattage()}`);
}
assignment4();