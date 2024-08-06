class Bulb
{
    constructor()
    {
        console.log("Instance of Bulb Instantiated.");
        
    }
    printBrand():void
    {
        console.log("Philips");
        
    }
}
function eg2(){
    let b:Bulb; 
    b = new Bulb();
    b.printBrand();
}
eg2();