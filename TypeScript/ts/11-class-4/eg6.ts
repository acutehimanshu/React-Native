abstract class Bulb{
    abstract setWattage(number:number):void;
    abstract getWattage():number;
    getBrand():string{
        return "GENETIC";
    }
}
class ABulb extends Bulb{
    wattage:number;
    getWattage(): number {
        return this.wattage;
    }
    setWattage(number: number): void {
        this.wattage = number
    }
}

// Abstract class May contains non abstract methods
function eg6(){
    let a:ABulb;
    a = new ABulb();
    a.setWattage(50)
    console.log(a.getWattage());
    console.log(a.getBrand());

    let b:Bulb;
    b = new ABulb();
    b.setWattage(100)
    console.log(b.getWattage());
    console.log(b.getBrand());
    
}
eg6();