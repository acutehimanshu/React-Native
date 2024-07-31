function eg1(){
    let a = [10, "Good", 50, 40];
    console.log(a);
    a = [1,2,3,"Correct", 5,6,7];
    console.log(a);
    
    let student:[number, string];
    student = [101, "Ramesh"];
    console.log(student);

    //student = [1,2,3]; // error type number is not assignable to type string
    //console.log(student);
}
eg1();

/*
output:
[ 10, 'Good', 50, 40 ]
[ 1, 2, 3, 'Correct', 5, 6, 7 ]
[ 101, 'Ramesh' ]
 */
