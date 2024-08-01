function eg5_some(x:number, y:number){
    console.log(x*y);
    
}
function eg5(){
    let x:[number, number];
    x = [10,20];
    eg5_some(...x);
}

eg5();