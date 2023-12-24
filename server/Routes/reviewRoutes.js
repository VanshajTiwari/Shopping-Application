const Route=require('express').Router();
const { loggedin } = require('../Controllers/Auth/AuthControllers');
const reviewModel=require('./../models/reviews');

Route.use(loggedin);
Route
.get('/all',async (req,res)=>{
    console.log(req.user);
    const reviews=await reviewModel.find({}).populate("user product");
    res.status(200).json(reviews);

})
.post("/:id/addnew",async (req,res)=>{
        console.log(req.body);
        const product__id=req.params.id;
        const user__id=req.user.id;
        const {review,rating}=req.body;
        const newReview=await reviewModel.create({user:user__id,product:product__id,review,rating});
        res.status(201).json({status:"success",result:{newReview}});

});

module.exports=Route;