require('dotenv').config();
const express = require('express');
const cors = require('cors');
const sendRequest = require('./bot');
const fs = require('fs')
const https = require('https');

const app = express();
app.use(express.json());

app.use(cors());



app.get('/', (req, res)=>{
    res.send('hi')
})



app.post('/sendRequest', (req, res)=>{
    const { msg } = req.body;
    sendRequest(msg,(status)=>{
        res.json(status);
    })
})









/* 
================
Generate and send code to log in
================
*/
app.post('/bot-log-in', (req,res)=>{
    const { chatId } = req.body;
    sendSms(req.body.chatId, (code)=>{
        if(code){
            passObj[chatId] = {
                code: code,
                clear: setTimeout(()=>{
                    passObj[chatId] = {}
                    console.log('GO CLEAR')
                    console.log(passObj)
                }, 25000)
            };
            console.log(chatId)
            res.json(true);
        }else{
            res.json(false);
        }

    })
    
})


/* 
================
check genereted code
================
*/




console.log(process.env.DEVELOP)
console.log(process.env.DEVELOP === 'develop')

if(process.env.DEVELOP === 'develop'){
    app.listen(process.env.PORT, err=>{
        err ? console.log(err) :
        console.log(`Starting server http://localhost:${process.env.PORT} `);
     })
}
else{
    console.log('HELLO')
    var privateKey = fs.readFileSync( './cert/key.pem' );
    var certificate = fs.readFileSync( './cert/cert.pem' );

    https.createServer({
        key: privateKey,
        cert: certificate
    }, app).listen(process.env.PORT);
}






