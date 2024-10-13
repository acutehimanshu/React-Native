class aaa{
    private x:number;
    protected y:number;
    public z:number;
    u:number
}
class bbb extends aaa{
    constructor(){
        super();
        this.x=10; // Incorrect 
        this.y=100; 
        this.z=1000;
        this.u=10000
    }
}