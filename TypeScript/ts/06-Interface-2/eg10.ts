interface StringNumberKeyValue
{
    [x:string]:number;
    [y:number]:string;
}
function eg10()
{
    let kv:StringNumberKeyValue;
    kv={
    }
    kv.24="Hello"; // Unexpected keyword or identifier.
    kv.32="God is great"; // Unexpected keyword or identifier.
    kv.cool=25;
    kv.ice=343;
    kv.suger = 34;
    console.log(kv);
}
eg10();

/*


*/