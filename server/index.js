const Express=require('express');
const morgan=require('morgan');
const App=Express();

App.use(Express.json());
App.use(morgan('tiny'));


//
const userRoutes=require("./Routes/userRoutes");
const productRoutes=require('./Routes/productsRoutes');
//Routes

App.use("/users",userRoutes);
App.use("/products",productRoutes);
App.use("/api/v1/",(req,res)=>res.status(200).send("Hello By Server"));

App.all("*",(req,res)=>res.status(404).send("NOT FOUND"));
module.exports=App
