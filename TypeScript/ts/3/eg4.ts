// the following someEg4 is incorrect because it has a reachable end point
function someEg4():never
{
console.log("Great");
}

function eg4(){
someEg4();
}

eg4();
