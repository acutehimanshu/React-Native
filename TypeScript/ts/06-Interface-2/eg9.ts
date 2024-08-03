interface StringNumberKeyValue
{
    [x:string]:number;
    [y:string]:string;
}
function eg9()
{
    let kv:StringNumberKeyValue;
    kv={
    }
    console.log(kv);
}
eg9();

/*

eg9.ts:3:5 - error TS2374: Duplicate index signature for type 'string'.

3     [x:string]:number;
      ~~~~~~~~~~~~~~~~~~

eg9.ts:4:5 - error TS2374: Duplicate index signature for type 'string'.

4     [y:string]:string;
      ~~~~~~~~~~~~~~~~~~



*/