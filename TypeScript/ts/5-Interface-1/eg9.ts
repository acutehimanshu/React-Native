function eg9(){

    interface Bulb{
        wattage:number, 
        printWattage():void
    }

    let b:Bulb;
    b = {
        wattage:60,
        printWattage():void{
            console.log(this.wattage);
            
        }
    }
    console.log(b);

    let c:Bulb;
    c = {
        wattage:240,
        printWattage():void{
            console.log(`wattage is ${this.wattage}`);
            
        }
    }
    console.log(c);
    

}
eg9();

/* output:

{ wattage: 60, printWattage: [Function: printWattage] }
{ wattage: 240, printWattage: [Function: printWattage] }

*/