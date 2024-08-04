interface keyValue{
    [x:number]:string;
};

function eg3(){
    let a:keyValue;
    a={
        0:"Cool",
        1:"Fool",
        30:"Really Cool",
        40:50 // Type 'number' is not assignable to type 'string'.
    };
    console.log(a);
}

eg3();

/*
Error
Type 'number' is not assignable to type 'string'.
[x:number]:string;
 */