const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.listen(3000);

app.use(express.static('public'));

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.get('/user', urlencodedParser, (req, reply) => {
    console.log(req.body.data + "  **Get");
    reply.status(200).send("user's get is delivered");
});

app.post('/user', urlencodedParser,(req, reply)=>{
    if(req.header["user-agent"] != "Chrome/81.0.4044.129"){
        console.log(req.body.data + "  **Post");
        console. log(req.headers.origin); 
        reply.status(200). send("user's post is delivered");
        console. log("Not a chrome")  
    }else{
        console. log("Access is denied")
    }
});