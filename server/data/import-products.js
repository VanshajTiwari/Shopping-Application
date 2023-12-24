const Mongoose=require('mongoose');
const productModel=require("./../models/product");
const sample=require('./json/products-data.json');


(async function(){
    const connect=await Mongoose.connect('mongodb://localhost:27017/myntra',{family:4});
    console.log("DB OK!!");
    await productModel.deleteMany();
    await productModel.create(sample);
    console.log("Data Imported!!");

})();