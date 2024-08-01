// important
interface NewsPaper{
    readonly headline:string;
}
function eg8_some(np){ // but here its inter to type ANY . so it will work 
    console.log(np);
    np.headline = "Cool place";
    console.log(np);
}
function eg8(){
    let m = {
        headline: "Ujjain is the city of gods"
    }
    eg8_some(m);

    let k:NewsPaper
    k = {
        headline: "God is great"
    }
    eg8_some(k); // we are passing input of type NewsPaper
}
eg8();

/*
{ headline: 'Ujjain is the city of gods' }
{ headline: 'Cool place' }
{ headline: 'God is great' }
{ headline: 'Cool place' }
 */