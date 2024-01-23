const productModel=require("./../models/product");
exports.getAllproducts=async (req,res)=>{
    const products=await productModel.find({}).populate("sellers");
    res.status(200).json({status:"success",data:{products}});
};
exports.getProductByID=async (req,res)=>{
    const {id}=req.params;
    const product=await productModel.findById(id).populate({path:'review',populate:{path:'user'}});
    res.status(200).json({status:"success",data:{product}});
};
exports.AddNewProduct=async (req,res)=>{
    let sellerArr=[];
    const {sellers,productname,price,brand,summary,description,discount,category,quantity}=req.body;
    sellerArr.push(sellers);
    console.log(sellerArr);
    const newProducts=await productModel.create({
        sellers:sellerArr,
        productname,
        price,brand,
        summary,
        description,
        discount,
        category,
        quantity
    }); 
    res.status(200).json({status:"success",result:{newProducts}});
    
};
