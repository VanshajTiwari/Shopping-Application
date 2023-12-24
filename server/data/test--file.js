const userModel=require("./../models/usersSchema");
const ProductModel=require("./../models/product");
const ReviewModel=require("./../models/reviews");
const Mongoose=require("mongoose");


(async function(){
        const connect=await Mongoose.connect('mongodb://localhost:27017/myntra',{family:4});
        console.log("DB OK!!");
        const users= await userModel.find({},{id:1});
        console.log(users);
        console.log("Data Imported!!");
    

})();