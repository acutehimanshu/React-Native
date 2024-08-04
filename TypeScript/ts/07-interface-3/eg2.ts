interface keyValue{
    [x:number]:string;
};

function eg2(){
    let a:keyValue;
    a={
        0:"Cool",
        1:"Fool",
        30:"Really Cool"
    };
    console.log(a);
}

eg2();

/*
{ '0': 'Cool', '1': 'Fool', '30': 'Really Cool' }
 */