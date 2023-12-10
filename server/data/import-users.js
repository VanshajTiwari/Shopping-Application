const Mongoose=require('mongoose');
const usersSchema=require('./../models/usersSchema');
Mongoose.connect("mongodb://localhost:27017/myntra",{family:4}).then(er=>console.log("DB OK!!"));
let users=require('./json/users-data.json');
//console.log(users);

async function fillUsers(){
  //  console.log(usersSchema);
    await usersSchema.deleteMany();
     await usersSchema.create(users); 
     console.log("User Data Imported");
}
 
fillUsers();  