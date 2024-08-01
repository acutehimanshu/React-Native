type myTypeinEg2=(n:number)=>string;
function someEg2(a:myTypeinEg2, ...data:number[])
{
let x = 0;
while(x<data.length)
{
console.log(a(data[x]));
x++;
}
}
function eg2_1(a:number){
return `cool ${a}`;
}
function eg2(){
    someEg2(eg2_1, 20, 20,30 ,40);
}
eg2();
