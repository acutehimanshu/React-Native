// Class aaa extends bbb,ccc // class extends more than one class
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


class ccc
{
    price:number;
    constructor(){
        this.price = 0;
    }
    setPrice(price:number):void{
        this.price = price;
    }
    getPrice():number{
        return this.price;
    }
}

// code wont compile
class aaa extends bbb,ccc
{
    
}

/*
Error:

Classes can only extend a single class.

*/