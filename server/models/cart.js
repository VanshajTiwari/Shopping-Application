const Mongoose=require("mongoose");
const orderScehma=new Mongoose.Schema({
    userId:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    productId:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    quantity:{
        type:Number,
        default:1
    },
    paid:{
        type:Boolean,
        default:false
    }
});

module.exports=Mongoose.model("cart",orderScehma);