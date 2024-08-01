function eg10(){
let x:number |string[];
x = 10;
console.log(x);
x = ["God", "is",'great'];
console.log(x);

x = [10, "god"]; // incorrect
console.log(x);

x = ["GOd", 10]; // incorrect
console.log(x);
}

eg10();