function eg8(){
    let x:(number | string)[];
    x = [10,20,30];
    console.log(x);
    let y:(number | string)[];
    y = ["God","Is","Great"];
    console.log(y);
    let z:(number | string)[];
    z = ["God is great", 10];
    console.log(z);
    z = [20, "God is great", 10];
    console.log(z);
}
eg8();