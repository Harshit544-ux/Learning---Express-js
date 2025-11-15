// take the module of express js
const express=require('express');

//creating the instance of express js
const app=express();

//parsing the json to object
app.use(express.json());

// GET routing / endpoint
app.get("/",(req,res)=>{
    res.send("get the data");
})

//POST routing / endpoint
app.post("/add_users",(req,res)=>{
    console.log(req.body)
    console.log(req.body.name);
    console.log(req.body.city);
    res.send("Data is saved");
})

// app is listening
app.listen(4000,()=>{
    console.log('app is listening at port no. 4000');
})