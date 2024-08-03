interface NewsPaper{
    readonly headline:string;
}
function eg6_some(np:NewsPaper){
    console.log(np);
    np.headline = "Cool place";
    console.log(np);
}
function eg6(){
    let k = {
        headline: "Good"
    }
    eg7_some(k);
}
eg6();
