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
    return b;
}

function eg4(){
let f:BulbFactory;
f = philipsBulbfactory;
}
eg4();


/**
 * Property 'productionCount' is missing in type '(w: number) => Bulb' but required in type 'BulbFactory'.
 */