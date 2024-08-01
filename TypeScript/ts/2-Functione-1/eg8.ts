function someEg8(author:string, ...books:string[])
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
No book written by Goldy.
Books Written by Mario Puzo are as follows:
God Father
The Sicilians
*/