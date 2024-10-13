class aaa{
    private x:number;
    protected y:number;
    public z:number;
    u:number
}
function eg8(){
    let a:aaa;
    a = new aaa();
    a.x=10; // Incorrect
    a.y=100; // incorrect
    a.z=1000;
    a.u=10000;
}
eg8();