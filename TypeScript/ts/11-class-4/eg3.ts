abstract class Bulb{
    abstract setWattage(number):void;
    abstract getWattage():number;
}
class ABulb extends Bulb{
    
}
function eg3(){
    let a = new Bulb();
    let b = new ABulb();
}

// ERROR: Can not create instance of abstract class