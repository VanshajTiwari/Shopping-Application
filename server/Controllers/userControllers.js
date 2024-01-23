const productModel = require('../models/product');
const userModel=require('../models/usersSchema');
const cartModel=require("../models/cart");
const wishListModel=require("../models/order");
exports.getAllusers=async (req,res)=>{
    
    const users=await userModel.find({});
    res.status(200).json({status:"Success",data:users});
}

exports.getWishlist=async (req,res)=>{
    const {user}=req;
    const wishlist=await wishListModel.find({userId:user});
    res.json({status:"success",data:wishlist});

}
exports.addToWishlist=async (req,res)=>{
    console.log(req.user);
    const {id}=req.params;
    const {user}=req;
    const product=await productModel.findById(id);
    await wishListModel({userId:user,productId:product}).save();
    res.json({status:"success",message:"data updated"});
}
exports.removefromWishlist=async(req,res)=>{
    const {id}=req.params;
    const {user}=req;
    await wishListModel.findByIdAndDelete(id);
    const newList=await cartModel.find({userId:user});
    res.json({status:"success",data:newList});
}
exports.getCart=async(req,res)=>{
    const {user}=req;
    const cart=await cartModel.find({userId:user});
    res.json({status:"success",data:cart});
}
exports.addtoCart=async(req,res)=>{
    const {id}=req.params;
    const {user}=req;
    const product=await productModel.findById(id);
    await cartModel({userId:user,productId:product}).save();
    res.json({status:"success",message:"data updated"});
}
exports.removefromCart=async(req,res)=>{
    const {id}=req.params;
    const {user}=req;
    await cartModel.findByIdAndDelete(id);
    const newList=await cartModel.find({userId:user});
    res.json({status:"success",data:newList});
}