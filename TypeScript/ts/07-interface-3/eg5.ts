interface keyValue{
    [x:number]:string;
};
function eg5(){
    let k:keyValue;
    k = {}
    k[0] = 'Cool';
    k[30] ="Great";
    k[1] = 2; //Type 'number' is not assignable to type 'string'.
    console.log(k);
    
}
eg5();

/*
Type 'number' is not assignable to type 'string'.
*/