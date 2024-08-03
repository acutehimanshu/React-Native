function eg3(){
    interface NewsPaper{
        headline:string;
    }
    let k:NewsPaper;
    k = {
        headline:"God is great"
    }
    console.log(k);
    k.headline = "Ujjain is the city of god";
    console.log(k);
}

eg3();