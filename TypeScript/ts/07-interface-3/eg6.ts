interface keyValue{
    [x:number]:string;
}
function eg6(){
    let k:keyValue;
    k = {}
    k[-10] = 'Cool';
    k[-30] ="Great";
    console.log(k);
    
}
eg6();
