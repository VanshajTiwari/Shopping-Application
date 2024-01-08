const reviewModel=require('./../models/reviews');

exports.getAllreviews=async (req,res)=>{
    console.log(req.user);
    const reviews=await reviewModel.find({});
    res.status(200).json(reviews);

};
exports.addNewReview=async (req,res)=>{
    console.log(req.body);
    const product__id=req.params.id;
    const user__id=req.user.id;

    const {review,rating}=req.body;
    const newReview=await reviewModel.create({user:user__id,product:product__id,review,rating});
    res.status(201).json({status:"success",result:{newReview}});

} 