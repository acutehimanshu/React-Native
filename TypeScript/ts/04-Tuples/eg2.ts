function eg2(){
    let student:[number, string]; 
    let k = [101, "Sameer"]; // k is not a tuple
    student = k;
    console.log(student);
}
eg2();

/**
 Error: 

 Type '(string | number)[]' is not assignable to type '[number, string]'.
  Target requires 2 element(s) but source may have fewer.

4     student = k;
      ~~~~~~~

 */