function someEg8(author:string, ...books:string[], ...movies:string[])
{
	if(books.length == 0){
		console.log(`No book written by ${author}.`)
	}else{
		console.log(`Books Written by ${author} are as follows: `);
		let x = 0;
		while(x<books.length){
			console.log(books[x])
		x++;
		}
	}
}
function eg8(){
	someEg8("Goldy");
	someEg8("Mario Puzo", "God Father", "The Sicilians");
}
eg8();

/*
eg9.ts:1:33 - error TS1014: A rest parameter must be last in a parameter list.

*/