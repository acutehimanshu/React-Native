interface StringNumberKeyValue
{
    [x:string]:number;
}
function eg7()
{
    let kv:StringNumberKeyValue;
    // kv={};
    // kv.bus=5000000;
    // kv.cycle=2000;
    // kv.car=1000000;
    // or
    kv={
    bus:5000000,
    cycle:2000,
    car:1000000
    }
    console.log(kv);
}
eg7();