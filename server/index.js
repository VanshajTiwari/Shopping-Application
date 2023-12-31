const Express=require('express');
const morgan=require('morgan');
const App=Express();
const cors=require('cors');
const cookieParser=require('cookie-parser');
const passport=require('passport');
const expressSession=require('express-session');
const dotenv=require('dotenv');
dotenv.config({path:"config.env"});
App.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
App.use(expressSession({
    secret:process.env.SECRET_EXPRESS,
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        httpOnly:true,
        sameSite:'strict'
    }
}));
App.use(passport.initialize());
App.use(passport.session());
require("./Controllers/Auth/passport")(passport);


App.use(cookieParser());
App.use(Express.json());
App.use(morgan('dev'));

App.use("/",Express.static("./public"));
App.use(Express.urlencoded({extended:false}));
//
const userRoutes=require("./Routes/userRoutes");
const productRoutes=require('./Routes/productsRoutes');
const reviewRoutes=require('./Routes/reviewRoutes');
//Routes




const upload=require("./utils/uploadImage");
App.post("/image",(req,res,next)=>{req.dest="users";next();},upload.single('files'),(Req,res)=>{
    res.redirect("/index.html");
})
App.use("/users",userRoutes);
App.use("/products",productRoutes);
App.use("/reviews",reviewRoutes);
App.use("/api/v1/",(req,res)=>res.status(200).send("Hello By Server"));

App.all("*",(req,res)=>res.status(404).send("NOT FOUND"));
module.exports=App
