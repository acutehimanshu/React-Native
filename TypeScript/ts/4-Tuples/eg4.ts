function eg4_some(x:number, y:number){
    console.log(x+", "+y);
}

function eg4(){
    let a = [10,20];
    eg4_some(...a);
}

eg4();

/**
output: ERROR
A spread argument must either have a tuple type or be passed to a rest parameter.

// means either pass tuple
or change paramter to rest parameter.
 */