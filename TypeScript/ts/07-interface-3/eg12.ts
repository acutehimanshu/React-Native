interface Company
{
    name:string,
    yearOfEstablishment:number
}
interface Bulb
{
    price:20,
    wattage:number,
    company:Company
}
function eg11(){
    let b:Bulb;
    b={
        price:20, // cannot be anything else than 20
        wattage:60,
        company:{
            name:"Philips",
            yearOfEstablishment:1990
        }
    }
    console.log(b);
    
}
eg11();

//  {
//    price: 20,
//   wattage: 60,
//   company: { name: 'Philips', yearOfEstablishment: 1990 }
// }