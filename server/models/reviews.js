const Mongoose=require('mongoose');

const reviewSchema=new Mongoose.Schema({
    user:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    product:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    review:
        {
            type:String
        }
    ,
    image:[
        {
        type:String,
    }
    ],
    rating:{
        type:Number,
        min:1,
        max:5

    },
    createdAt:{type:Date,default:Date.now()}
},    {
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});

module.exports=Mongoose.model('reviews',reviewSchema);