const sendEmail=require("../../utils/email");
const userModel=require("../../models/usersSchema");
const crypto=require('crypto');
const bscrypt=require("bcryptjs");
exports.loggedin=(req,res,next)=>{
    if(!req.user)
       return res.status(203)
                .json({status:"Unauthorised",message:"NOT LOGIN!!"});
    return next();
};


exports.Signup=async(req,res)=>{
    try{
        const user=await userModel.create(req.body);
        res.status(200).json({status:"success",data:user});
    
    }
    catch(err){
        res.status(200).json({status:"failed",error:err.message});
    }
    
};
exports.Login=async(req,res)=>{
   res.status(200).json({status:"success",data:req.user,session:req.sessionID});
};
exports.forgotPasword=async (req,res)=>{
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
};

exports.resetPassword=async (req,res)=>{
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
       
};
exports.updatePassword=async (req,res)=>{ 
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
};