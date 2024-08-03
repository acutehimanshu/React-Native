interface StringNumberKeyValue
{
    [x:string]:number;
}
function eg8()
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
    car:1000000,
    cost: "$200" // incorrect // Type 'string' is not assignable to type 'number'.
    }
    console.log(kv);
}
eg8();

/*

- error TS2322: Type 'string' is not assignable to type 'number'.

17     cost: "$200"
       ~~~~

  eg8.ts:3:5
    3     [x:string]:number;
          ~~~~~~~~~~~~~~~~~~
    The expected type comes from this index signature.

    */