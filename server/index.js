const Express=require('express');
const morgan=require('morgan');
const App=Express();


App.use(morgan('tiny'));

App.get("/",(req,res)=>res.status(200).send("Hello"));

module.exports=App
