const express = require('express');
const app = express();

//Middleware (to read Json data from request body)
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("Hello World");
})


//Port
const PORT=4000;

app.listen(PORT,()=>{
    console.log('app is listening on port 4000')
})