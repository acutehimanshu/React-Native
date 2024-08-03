interface NewsPaper{
    readonly headline:string;
}
function eg7_some(np){
    console.log(np);
    np.headline = "Cool place";
    console.log(np);
}
function eg7(){
    let k = {
        headline: "Good"
    }
    eg7_some(k);
}
eg7();
