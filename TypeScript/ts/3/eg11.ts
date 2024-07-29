function eg11(){
    let x = [
        [10,20,30],
        ["god","is","great"],
        [true, 20]
    ];
    for (let a = 0; a < x.length; a++) {
        for (let b = 0; b < x[a].length; b++) {
            console.log(x[a][b]);
        }
    }
}
eg11();