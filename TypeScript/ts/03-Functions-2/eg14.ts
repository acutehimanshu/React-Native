function eg14_1(...data:number[]){
console.log("eg14_1 with ...data:number[] paraamter got executed");
for (let a of data) console.log(a);
}

function eg14_2(data:number[]){
console.log("eg14_2 with data:number[] parameter goot executed");
for (let x of data) console.log(x);
}

function eg14(){
let x = [10,20,30,40];
eg14_1(...x);
eg14_2(x);
//eg14_1(x); // incorrect
//eg14_2(10,20,30); // incorrect
}

eg14();
