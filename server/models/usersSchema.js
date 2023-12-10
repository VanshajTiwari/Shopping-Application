const Mongoose=require('mongoose');

const userSchema=new Mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String
    },
    role:{
        type:String,
        enum:["users","seller"],
        default:"users"
    },
    password:{
        type:String
    },
    confirmpassword:{
        type:String
    },
    address:{
        type:Object
    },
    cart:[{
         type:Mongoose.Schema.Types.ObjectId,
         ref:"products"}
    ],
    orders:[{
        type:Mongoose.Schema.Types.ObjectId,
        ref:"products"}
    ],
    active:{
        type:Boolean,
        enum:[true,false]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },

},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});
