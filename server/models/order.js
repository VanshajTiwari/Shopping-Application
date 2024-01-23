const Mongoose=require("mongoose");
const orderScehma=new Mongoose.Schema({
    productId:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"products"
    },
    userId:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
});

module.exports=Mongoose.model("orders",orderScehma);