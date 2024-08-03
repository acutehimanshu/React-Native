interface Bulb{
    wattage:number;
    printWattage():void;
}

// following is call signature interface
interface BulbFactory{
    productionCount:number;
    (wattage:number):Bulb;
}

function philipsBulbfactory(w:number):Bulb
{
    if(w<0 || w>240) return null;
    let b:Bulb;
    b = {
        wattage:w,
        printWattage():void{
            console.log(`Wattage is ${w}`);
        }
    };
    philipsBulbfactory.productionCount++;
    return b;
}

philipsBulbfactory.productionCount = 0;

function eg3(){
let f:BulbFactory;
f = philipsBulbfactory;
let bulb1:Bulb;
bulb1=f(-20);
console.log(bulb1);
let bulb2:Bulb;
bulb2=f(100);
console.log(bulb2);
bulb2.printWattage();
let bulb3:Bulb;
bulb3=f(200);
console.log(bulb3);
bulb3.printWattage();
console.log(`Number of bulbs producted nu philips bulb factory ${philipsBulbfactory.productionCount}`);
console.log(`Number of bulbs producted nu philips bulb factory ${f.productionCount}`);

}
eg3();