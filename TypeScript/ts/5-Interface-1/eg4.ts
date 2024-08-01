function eg4(){
    interface NewsPaper{
        readonly headline:string;
    }
    let k:NewsPaper;
    k = {
        headline:"God is great"
    }
    console.log(k);
    k.headline = "Ujjain is the city of god"; // can not reassign 
    console.log(k);
}

eg4();