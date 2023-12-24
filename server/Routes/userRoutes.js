const Express=require('express');
const userModel=require('./../models/usersSchema');
const passport = require('passport');
const Route=Express();


Route
.get("/",async (req,res)=>{
    const users=await userModel.find({});
    res.status(200).json({status:"Success",result:{users}});
})
.post("/signup",async (req,res)=>{
    await userModel.create(req.body);
    res.status(200).send("DOne");
}).post("/login",passport.authenticate("local"),(req,res)=>{
    res.status(200).send(req.user);
})
module.exports=Route;