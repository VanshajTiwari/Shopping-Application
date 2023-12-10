const Mongoose=requires('mongoose');

const reviewSchema=new Mongoose.Schema({
    user:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    product:{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"products"
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

module.exports=Mongoose.Schema('reviews',reviewSchema);