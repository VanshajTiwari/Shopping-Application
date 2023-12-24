const productModel=require('./../models/product');

const Route=require('express').Router();

Route.get("/all",async (req,res)=>{
    const products=await productModel.find({}).populate("sellers");
    res.status(200).json({status:"success",result:{products}});
});

Route.get("/get/:id",async (req,res)=>{
    const {id}=req.params;
    const product=await productModel.findById(id).populate('review');
    res.status(200).json({status:"success",result:{product}});
})
Route.post("/Add",async (req,res)=>{
    let sellerArr=[];
    const {sellers,productname,price,brand,summary,description,discount,category,quantity}=req.body;
    sellerArr.push(sellers);
    console.log(sellerArr);
    const newProducts=await productModel.create({sellers:sellerArr,productname,price,brand,summary,description,discount,category,quantity});
   // newProducts.save();
    res.status(200).json({status:"success",result:{newProducts}});
    
})

module.exports=Route;