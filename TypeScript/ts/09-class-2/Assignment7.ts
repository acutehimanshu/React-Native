/*Aaa interface has a method declaration
Bbb interface is a method declaration with same name as in aaa interface but different parameters (signature)

What will happen 
Class ccc implements aaa,bbb 
*/

interface aaa
{
    printBrandName():void;
    printProductName():void;
}

interface bbb
{
    printBrandName():void;
    printProductName(name:string):string;
}

class ccc implements aaa,bbb
{
    printBrandName():void{
        console.log("Philips");
    }

    
    printProductName():void{
        console.log("Bulb");
    }
        

    printProductName(name:string):string{
        return name;
    }
}

function assignment6()
{
    let c = new ccc();
    c.printBrandName();
    c.printProductName();
    c.printProductName("Laptop");
}
assignment6();