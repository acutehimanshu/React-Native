function eg3(){
    let a = [10,20,30];
    let b=a;
    console.log(a);
    console.log(b);
    b[3] = 400;
    console.log(a);
    console.log(b);

    let student1:[number, string];
    let student2:[number, string];
    student1=[101, "Sameer"];
    student2 = student1;
    console.log(student1);
    console.log(student2);
    student2[0] = 102;
    console.log(student1);
    console.log(student2);
}
eg3();

/*
Output:

[ 10, 20, 30 ]
[ 10, 20, 30 ]
[ 10, 20, 30, 400 ]
[ 10, 20, 30, 400 ]
[ 101, 'Sameer' ]
[ 101, 'Sameer' ]
[ 102, 'Sameer' ]
[ 102, 'Sameer' ]
 */