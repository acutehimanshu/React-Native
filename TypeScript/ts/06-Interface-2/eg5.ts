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
philipsBulbfactory.yearOfEstablishment  = 2003;

function eg5(){
let f:BulbFactory;
f = philipsBulbfactory;
console.log(`Number of bulbs producted nu philips bulb factory ${f.productionCount}`);
// console.log(`yes of estb is ${f.yearOfEstablishment}`); // incorrect
console.log(`yes of estb is ${philipsBulbfactory.yearOfEstablishment}`); // incorrect

}
eg5();


/*
Property 'yearOfEstablishment' does not exist on type 'BulbFactory'.

// we can not access additional property thouth interface pointers.
*/