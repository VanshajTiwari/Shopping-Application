const Express=require('express');
const passport = require('passport');
const Route=Express();
const Authcontrollers=require("./../Controllers/Auth/AuthControllers");
const {getAllusers}=require("./../Controllers/userControllers");
Route
.get("/",getAllusers)
.post("/signup",Authcontrollers.Signup)
.post("/login",passport.authenticate("local"),Authcontrollers.Login)
.post("/resetPassword",Authcontrollers.forgotPasword)
.post("/resetPassword/:token",Authcontrollers.resetPassword); 
Route.use(Authcontrollers.loggedin);
Route.post("/updatepassword/:id",Authcontrollers.updatePassword);  
 
module.exports=Route; 