interface aaa{
    x:number,
    y:number
}

interface aaa{ // trying to change the already set property guideling.
    x:string,
    y:number
}

/*
Subsequent property declarations must have the same type.  Property 'x' must be of type 'number', but here has type 'string'.
*/