interface NewsPaper{
    readonly headline:string;
}
function eg5_some(np:NewsPaper){
    console.log(np);
    np.headline = "Cool place";
    console.log(np);
}
function eg5(){
    let k:NewsPaper;
    k = {
        headline: "Good"
    }
    eg7_some(k);
}
eg5();
