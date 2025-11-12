const express = require('express');

const app = express();

// // localhost:4000/
// app.use('/',(req,res)=>{
//     res.send({"name":"Harshit","age":20})
// })

// localhost:4000/about
// app.use("/contact", (req, res) => {
//     res.send("contact");
// })


// localhost:4000/about/1/harshit
app.use("/about/:id/:users", (req, res) => {
    console.log(req.params);
    res.send(`about with id ${req.params.id} and users ${req.params.users}`);
});
// localhost:4000/about/1
app.use("/about/:id", (req, res) => {
    console.log(req.params);
    res.send(`about with id ${req.params.id}`);
});

// app.use("/contact/:id",(req,res)=>{
//     console.log(req.params);
//     res.send(`response of contact route ${req.params.id}`)
// })


// http://localhost:4000/contact/2/harshit
app.use("/contact/:id/:contactusers",(req,res)=>{
    console.log(req.params)
    res.send(`response of id= ${req.params.id} with contactuser = ${req.params.contactusers}`)
})




app.listen(4000, () => {
    console.log("server is listening at 4000")
})


