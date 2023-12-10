const Mongoose=require('mongoose');
const productSchema=new Mongoose.Schema({
    slug:{
        type:String
    },
    sellers:[{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"Products must belong to Seller"]
    }],
    productName:{
        type:String,
        required:[true,"Product have Some Name"],
        trim:true,
        min:1
    },
    ratingsAverage:{
        type:Number,
        default:4.5
    },
    ratingsQuantity:{
        type:Number,
        default:4.5
    },
    price:{
        type:Number,
        required:[true,"Product must have Price"]
    },
    brand:{
        type:String,
        required:[true,"Product must belongs some brand"]
    },
    summary:{
        type:String,
        required:[true,"Summary"]
    },
    description:{
        type:String,
      //  required:[true,"Description required"]
    },
    discount:{
        type:Number,
    },
    Quantity:{
        type:Number,
        required:[true,"Description"]
    },
    imagesCover:{
        type:String,
        required:[true,"product must have Images Cover"]
    },
    images:[{
        type:String,
        required:[true,"product must have Images"]
    }],
    category:{
        type:String,
        enum:["sports",'fashion',"men",'women',"kids","toy","phone","laptop","other","electronics","makeup","skincare","lifestyle"],
        required:[true,"product must belongs to some category"],
    },
    rating:{
        type:Number,
        min:1,
        max:5
    }
},
    {
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
    }
);
productSchema.virtual('reviews',{
    ref:"Review",
    foreignField:'tour',
    localField:"_id",

});
productSchema.pre('save',function(next){
    this.slug=slugify(this.productName,{lower:true});
    next();
});