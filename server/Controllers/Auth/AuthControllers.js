exports.loggedin=(req,res,next)=>{
    if(!req.user)
       return res.status(203)
                .json({status:"Unauthorised",message:"NOT LOGIN!!"});
    return next();
}