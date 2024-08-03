function eg2(){
    interface Employee{
        id:string;
        name:string;
        mobileNumber?:string;
    }
    let a:Employee;
    let b:Employee;
    let c:Employee;
    a={
        id:"A1001",
        name:"Suresh",
        mobileNumber:"9825038250",
    };
    console.log(a);

    b={
        id:"A1002",
        name:"Majesh"
    };
    console.log(b);
    // following is incorrect.
    c={
        name:"Suresh",
    };
    console.log(c);
}
eg2();