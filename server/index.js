const Express=require('express');
const morgan=require('morgan');
const passport=require('./Controllers/passport');
console.log(passport);
const App=Express();

App.use(morgan('tiny'));

App.get("/",(req,res)=>res.status(200).send("Hello"));
App.post('/authenticate', passport.authenticate('custom'), (req, res) => {
    // If the middleware passes, the user is authenticated.
    res.json({ message: 'Authentication successful.' });
  });

module.exports=App
