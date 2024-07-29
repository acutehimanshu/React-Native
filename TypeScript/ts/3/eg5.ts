function someEg5():never
{
console.log("Great");
throw new Error ("whatever");
}

function eg5(){
someEg5();
}

eg5();
