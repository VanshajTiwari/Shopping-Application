const Express=require('express');
const userModel=require('./../models/usersSchema');
const passport = require('passport');
const Route=Express();
const sendEmail=require("../utils/email");
const crypto=require('crypto');
const Authcontrollers=require("./../Controllers/Auth/AuthControllers");
Route
.get("/",async (req,res)=>{
    const users=await userModel.find({});
    res.status(200).json({status:"Success",result:{users}});
})
.post("/signup",async (req,res)=>{
    await userModel.create(req.body);
    res.status(200).send("DOne");
}).post("/login",passport.authenticate("local"),async (req,res)=>{
    console.log(req.body);
    res.status(200).send(req.user);
}).post("/resetPassword",async (req,res)=>{
    const {email}=req.body;
    const user=await userModel.findOne({email});
    if(!user){
        return res.status(200).json({Status:"NOT FOUND",message:"User Does not exist with this Email"});
    }
    
    const token=user.createResetToken();
    await user.save({validateBeforeSave:false});
    await sendEmail({
        email:email,
        subject:"Password reset Link",
        message:`THIS is message is for reset Link reset Token:${req.protocol}//:${req.get('host')}${req.originalUrl}/${token}`
    })
    res.status(200).json({status:"Success",message:"reset Link Sent to Your Mail"});
}).post("/resetPassword/:token",async (req,res)=>{
    console.log(req.params);
       const {password,confirmpassword}=req.body;
       console.log({password,confirmpassword}); 
       const token=req.params.token;
       const resetToken=crypto.createHash('sha256').update(token).digest('hex');
       const user=await userModel.find({resetToken});
       res.status(200)
          .json({status:"Success",
                    result:{
                        message:"THis END Point is Working Fine",
                        user
                    }
                });
       
}); 
Route.use(Authcontrollers.loggedin);
Route.post("/updatepassword/:id",async (req,res)=>{ 
    const {currentPassword,password,confirmpassword}=req.body;
    const user=await userModel.findById(req.params.id).select("+password +confirmpassword");
    if(!await user.checkPassword(currentPassword))
        return res.status(400).json({status:"Wrong Password",message:"Password is Incorrect"});
    console.log(user,req.user);
    if(user.id==req.user.id){ 
      const newUser=await userModel.findById(req.params.id).select("+password +confirmpassword");
      newUser.password=password;
      newUser.confirmpassword=password;
      newUser.save();
      res.status(202).json({status:"Updated",result:newUser});
     }
        else{
            res.status(400).json({status:"failed",message:"Bad Request"});
        }
});  
 
module.exports=Route; 