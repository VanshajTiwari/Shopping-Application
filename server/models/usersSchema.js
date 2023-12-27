const Mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const crypto=require('crypto');
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
        enum:["user","seller"],
        default:"user",
        select:false,
    },
    password:{
        type:String,
        required:[true,"required password"],
        select:false
    },
    confirmpassword:{
        type:String,
        validate:{
            validator:function(_){
                return _==this.password
            },
            message:"Password Mismatched"
        },
        select:false
    },
    phone:[{
        type:Number,
        min:10,
        max:10,
        validate:{
            validator:function(_){
               return _.length<=2
            },
            message:"not more than 2 numbers can be Added"
    }}
]
    ,
    address:{
        type:Object,
        default:{location:""}
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
        enum:[true,false],
        default:true,
        select:false
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    resetTokenCreatedAt:Date,
    resetToken:String,
    resetTokenExpire:String

},{
    toJSON:{virtuals:true},
    toObject:{virtuals:true}
});
userSchema.methods.checkPassword=async function(candPass){
    console.log(await bcrypt.compare(candPass,this.password));
    return await bcrypt.compare(candPass,this.password);
}
userSchema.methods.createResetToken=function(){
    const resetToken=crypto.randomBytes(12).toString('hex');
    this.resetToken=crypto.createHash('sha256').update(resetToken).digest('hex');
    this.resetTokenCreatedAt=Date.now();
    return resetToken;

}
userSchema.pre('save',async function(next){
        // if(this.isModified()){
            
        //    return next();
        // }
     
        this.confirmpassword="",
        this.password=await bcrypt.hash(this.password,12);
        next();
});
userSchema.methods.isModified=function(){
        return Boolean(this.resetToken);
}
const _=Mongoose.model("users",userSchema);
module.exports=_;