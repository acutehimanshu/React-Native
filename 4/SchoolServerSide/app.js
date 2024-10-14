
const express = require('express');
const app = express();
const PORT = 5050;

app.get('/students', (req, res)=>{
    console.log('Request Arrived.');
    res.json({students:[{rn:101, name:"Sameer Gupta"},
        {rn:102, name:"Lokesh Singh"},
        {rn:103, name:"Rohit"}
    ]});
    
});



app.listen(PORT,()=>{
    console.log("School Server is Ready at port: "+PORT)
});