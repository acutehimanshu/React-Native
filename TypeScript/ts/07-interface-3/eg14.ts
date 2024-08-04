interface aaa { x:number; }
interface bbb { y:number; }
interface ccc extends aaa,bbb { z:number; }
function eg14(){
    let c:ccc;
    c= {
        x:10,
        y:20,
        z:30
    }
    console.log(c);
    
}
eg14();

// { x: 10, y: 20, z: 30 }