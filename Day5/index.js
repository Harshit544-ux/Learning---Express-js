const express=require('express');

const app=express();


app.use('/',(req,res)=>{
    res.send({"name":"Harshit","age":20,"email":"harshit123344"})
})

app.listen(4000,()=>{
    console.log("server is listening at 4000")
})


