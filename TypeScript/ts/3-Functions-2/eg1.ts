function someEg1(a:(number)=>string, ...data:number[])
{
let x = 0;
while(x<data.length){
console.log(a(data[x]));
x++;
}
}

function eg1_1(x:number)
{
return `cool ${x}`;
}

function eg1()
{
someEg1(eg1_1, 10,20,30,40);
}
eg1();
