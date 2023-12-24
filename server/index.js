const Express=require('express');
const morgan=require('morgan');
const App=Express();
const cookieParser=require('cookie-parser');
const passport=require('passport');
const expressSession=require('express-session');

App.use(expressSession({
    secret:"veryTOpSecret",
    resave:false,
    saveUninitialized:false
}));
App.use(passport.initialize());
App.use(passport.session());
require("./Controllers/Auth/passport")(passport);


App.use(cookieParser());
App.use(Express.json());
App.use(morgan('tiny'));



//
const userRoutes=require("./Routes/userRoutes");
const productRoutes=require('./Routes/productsRoutes');
const reviewRoutes=require('./Routes/reviewRoutes');
//Routes

App.use("/users",userRoutes);
App.use("/products",productRoutes);
App.use("/reviews",reviewRoutes);
App.use("/api/v1/",(req,res)=>res.status(200).send("Hello By Server"));

App.all("*",(req,res)=>res.status(404).send("NOT FOUND"));
module.exports=App
