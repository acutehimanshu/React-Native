"use strict";
function eg2() {
    let x = 10; // data type of x will be implicitly set to number. 
    console.log(typeof x);
    let y = null; // data type of y will be implicitly set to null
    console.log(typeof y);
    let z; // data type of z will be explicitly to null type
    z = null;
    console.log(typeof z);
    let a = 10n; // data type of a will be implicitly set to bigInt
    let b = true; // data type of b will be implicitly set to Boolean
    let c; // explicitly data of c  is set to ANY
    // tsc will allow you to assign anything to c. 
    let d; // explicitly data type of d set to string
    d = "great";
    let e; // explicitly data type of e set to boolean 
}
eg2();
/*
number
object
object

*/ 
