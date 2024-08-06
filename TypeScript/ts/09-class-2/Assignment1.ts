// Class aaa implements bbb,ccc // example of implementing multiple interfaces


interface bbb
{
    wattage:number;
    setWattage(wattage:number):void;
    getWattage():number;
}

interface ccc 
{
    price:number;
    setPrice(price:number):void;
    getPrice():number;
}

class aaa implements bbb,ccc
{
    wattage:number;
    price:number;
    constructor(){
        this.wattage = 0;
        this.price = 0;
    }
    setWattage(wattage:number):void{
        this.wattage = wattage;
    }
    getWattage():number{
        return this.wattage;
    }

    setPrice(price:number):void{
        this.price = price
    }
    getPrice():number
    {
        return this.price;
    }
}
function assignment1(){
    let a;
    a = new aaa();
    a.setWattage(60);
    a.setPrice(100);
    console.log(`Price is ${a.getPrice()} for Bulb of wattage ${a.getWattage()}`);
}
assignment1();

// output: Price is 100 for Bulb of wattage 60