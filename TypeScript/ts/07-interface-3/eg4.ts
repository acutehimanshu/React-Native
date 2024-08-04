interface keyValue{
    [x:number]:string;
};
function eg4(){
    let k:keyValue;
    k = {}
    k[0] = 'Cool';
    k[30] ="Great";
    console.log(k);
    
}
eg4();

/*
{ '0': 'Cool', '30': 'Great' }
*/