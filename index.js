const express = require('express');
const app = express();
const mongoDB = require('./db');

const path = require('path')
mongoDB();

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
})
app.get('/',(req,res)=>{
    res.send("Hello Ankit")
})

app.use(express.json());
app.use('/api',require("./Routes/CreateUser"));
app.use('/api',require("./Routes/DisplayData"));
app.use('/api',require("./Routes/OrderData"));
app.use(express.static(path.join(__dirname, "./beta/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./beta/build/index.html"));
});
app.listen(8000,()=>{
    console.log(`Running  `)
});
