function eg7_some(x:number){
    let square = x*x;
    let e, factorial;
    e = 1;
    factorial = 1;
    while(e<=x){
        factorial = e*factorial;
        e++;
    }
    return [x, square, factorial];
}
function eg7(){
    let [num, sqr, fact] = eg7_some(5);
    console.log(num);
    console.log(sqr);
    console.log(fact);
}

eg7();

/*
5
25
120
*/