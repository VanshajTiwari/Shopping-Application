const Mongoose= require('mongoose');
const App=require('./index');
const dotenv=require('dotenv');
dotenv.config({path:__dirname+"/config.env"});
Mongoose.connect(process.env.CONN_STRING,{family:4}).then(e=>{console.log("DB Connected")}).catch(err=>{console.log("DB ERROR:",err.message)});

const port=process.env.PORT||8080

App.listen(port,()=>{console.log(`http://127.0.0.1:${port}`)});