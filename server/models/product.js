const Mongoose=require('mongoose');
const slugify=require("slug");
const productSchema=new Mongoose.Schema({
    slug:{
        type:String
    },
    sellers:[{

        type:Mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:[true,"Products must belong to Seller"]
    }],
    productname:{
        type:String,
        required:[true,"Product have Some Name"],
        trim:true,
        min:1
    },
    ratingsAverage:{
        type:Number,
        default:4.5,
        max:5,
        min:1
    },
    ratingsQuantity:{
        type:Number
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
    quantity:{
        type:Number,
        required:[true,"Description"]
    },
    imagesCover:{
        type:String,
       // required:[true,"product must have Images Cover"]
    },
    images:[{
        type:String,
       // required:[true,"product must have Images"]
    }],
    category:{
        type:String,
        enum:["sports",'fashion',"men",'women',"kids","toy","phone","laptop","other","electronics","makeup","skincare","lifestyle"],
        required:[true,"product must belongs to some category"],
    },
},
    {
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
    }
);
productSchema.virtual('review',{
    ref:"reviews",
    foreignField:'product',
    localField:"_id",

});
productSchema.pre('save',function(next){
    this.slug=slugify(this.productname,{lower:true});
    next();
});

module.exports=Mongoose.model('product',productSchema);