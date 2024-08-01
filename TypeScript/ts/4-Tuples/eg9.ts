function eg9(){
let a = [10, "good"] as const;
let b = a;
console.log(a);
console.log(b);
b[0]=20; // Cannot assign to '0' because it is a read-only property.
let c = 20;
c = a; // Type 'readonly [10, "good"]' is not assignable to type 'number'.
let d:[number, string];
d = a;
}

eg9();