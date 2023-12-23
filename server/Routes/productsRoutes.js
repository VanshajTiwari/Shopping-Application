const productModel=require('./../models/product');

const Route=require('express').Router();

Route.get("/all",(req,res)=>{
    console.log("All Products");
    res.status(200).send("All products");
});
Route.get("/:id/views",(req,res)=>{
    const {id}=req.params;
    console.log(id);
    res.status(200).send("views");
});
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