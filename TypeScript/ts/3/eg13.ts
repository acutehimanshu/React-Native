function eg13(){
    let x = [10,20,30];
    let y = [40,5,60,70];
    let z = [...x, 100, 200, ...y];
    for(let a of z) console.log(a);
}
 eg13();