function eg6_some(x:number){
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
function eg6(){
    let a = eg6_some(5);
    console.log(a);
    a = eg6_some(10);
    console.log(a);
    a[3]="cool";
    console.log(a);
    
}

eg6();

/*
[ 5, 25, 120 ]
[ 10, 100, 3628800 ]
[ 10, 100, 3628800, 'cool' ]

*/