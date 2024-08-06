class Bulb
{
    printBrand():void{
        console.log("Philips");
        
    }
}
function eg1(){
    let b:Bulb; // data type of b is Bulb, it can store address of Bulb type object
    // b is pointer.
    b = new Bulb();
    b.printBrand();
}
eg1();