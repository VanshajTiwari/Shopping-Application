const Mongoose=require('mongoose');
const reviewModel=require("./../models/reviews");
const sample=require('./json/reviews-data.json');


(async function(){
    const connect=await Mongoose.connect('mongodb://localhost:27017/myntra',{family:4});
    console.log("DB OK!!");
    await reviewModel.create(sample);
    console.log("Data Imported!!");

})();