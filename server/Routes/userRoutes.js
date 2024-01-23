const Express=require('express');
const passport = require('passport');
const Route=Express();
const Authcontrollers=require("./../Controllers/Auth/AuthControllers");
const userControllers=require("./../Controllers/userControllers");
Route
.get("/",userControllers.getAllusers)
.post("/signup",Authcontrollers.Signup)
.post("/login",passport.authenticate("local"),Authcontrollers.Login)
.post("/resetPassword",Authcontrollers.forgotPasword)
.post("/resetPassword/:token",Authcontrollers.resetPassword); 
Route.use(Authcontrollers.loggedin);
Route
.post("/updatepassword/:id",Authcontrollers.updatePassword)
.get("/wishlist",userControllers.getWishlist)
.post("/addtowishlist/:id",userControllers.addToWishlist)
.delete("/wishlist/remove/:id",userControllers.removefromWishlist)
.get("/cartlist",userControllers.getCart)
.post("/addtocart/:id",userControllers.addtoCart)  
.delete("/cart/remove/:id",userControllers.removefromCart)
module.exports=Route;  