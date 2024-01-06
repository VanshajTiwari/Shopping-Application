const Controllers = require('../Controllers/productsControllers');

const Route=require('express').Router();

Route.get("/all",Controllers.getAllproducts);
Route.get("/get/:id",Controllers.getProductByID);
Route.post("/Add",Controllers.AddNewProduct);

module.exports=Route;