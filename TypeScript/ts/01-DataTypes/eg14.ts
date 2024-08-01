function eg14()
{
	type Cake = {
		name: string,
		price: number,
	};
	type IceCream = {
		price: number,
		flavour: string,
	};
	type iceCreamCake = Cake & IceCream;
	let i:iceCreamCake;
	i = {
		name: "Cool Cake",	
		price:200,
		flavour:"Vanilla"
	}
}
eg14();