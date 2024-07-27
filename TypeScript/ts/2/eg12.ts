function some_eg12_1(a:number):number
{
return a*a;
}

function some_eg12_2():string
{
return "God is great";
}

function some_eg12_3(a:number):string
{
return `cool. ${a}`;
}

function eg12(){
console.log(some_eg12_1(10));
console.log(some_eg12_2());
console.log(some_eg12_3(300));

let aa:(a:number)=>number;
let bb:()=>string;
let cc:(a:number)=>string;

aa=some_eg12_1;
bb=some_eg12_2;
cc=some_eg12_3;

console.log(aa(10));
console.log(bb());
console.log(cc(300));

}

eg12();