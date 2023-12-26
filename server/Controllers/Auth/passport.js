const userModel=require("./../../models/usersSchema");
const localStrategy=require('passport-local').Strategy;
const intialisingPassportfuncionality=(passport)=>{
        passport.use(new localStrategy(async (username,password,done)=>{
            const user=await userModel.findOne({username:username}).select("+password +confirmpassword");
            console.log(user);
            if(!user)
                return done(null,"User Not FOUND!!");
           if(!await user.checkPassword(password))
               return done(null,"Username or password is Incorrect");
            done(null,user);
        }));
        passport.serializeUser((user,done)=>{
            done(null,user);
        });
        passport.deserializeUser(async (id,done)=>{
            const user=await userModel.findById(id);
            done(null,user);
        });
};


module.exports=intialisingPassportfuncionality;