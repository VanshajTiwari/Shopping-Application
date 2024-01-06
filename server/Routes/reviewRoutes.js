const Route=require('express').Router();
const { loggedin } = require('../Controllers/Auth/AuthControllers');
const Controllers=require('./../Controllers/reviewControllers');
Route.use(loggedin);
Route
.get('/all',Controllers.getAllreviews)
.post("/:id/addnew",Controllers.addNewReview)
;

module.exports=Route; 