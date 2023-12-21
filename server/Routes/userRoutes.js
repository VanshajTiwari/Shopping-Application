const Express=require('express');
const Route=Express();


Route
.get("/",(req,res)=>res.status(200).send("users hit"))
.post("/",(req,res)=>res);

module.exports=Route;