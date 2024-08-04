interface Company
{
    name:string,
    yearOfEstablishment:number
}
interface Bulb
{
    wattage:number,
    company:Company
}
function eg11(){
    let b:Bulb;
    b={
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
//   wattage: 60,
//   company: { name: 'Philips', yearOfEstablishment: 1990 }
// }