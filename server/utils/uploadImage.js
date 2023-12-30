const multer=require('multer');
const path=require('path');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        console.log(req.dest);
        return cb(null,"public/");
    },
    filename:function(req,file,cb){
       return checkfileType(file,cb);
    }
});
function checkfileType(file,cb){
    const pattern=/jpg|jpeg|png|gif/;
    const flag=pattern.test((path.extname(file.originalname)).toLowerCase());
    if(!flag)
        return cb("File is Not an Image");
    return cb(null,file.originalname);
}

const upload=multer({storage});

module.exports=upload;