const userModel=require('./../models/usersSchema');
exports.getAllusers=async (req,res)=>{
    const users=await userModel.find({});
    res.status(200).json({status:"Success",result:{users}});
}