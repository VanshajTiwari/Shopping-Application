const nodemailer=require('nodemailer');

const sendEmail=async options=>{
//1 Create a transporter
const transporter=nodemailer.createTransport({
    host:process.env.NODEMAILER_HOST,
    port:process.env.NODEMAILER_PORT,
    auth:{
        user:process.env.NODEMAILER_USERNAME,
        pass:process.env.NODEMAILER_PASSWORD
    }
    //Activate in Gmail "less secure app" option
})
// console.log(options.html);
//2 Define the email options
const mailOption={
    from :"Vanshaj Tiwari <hello@jonas.io>",
    to: options.email,
    subject:options.subject, 
    text:options.message,
   // html:options.html
};
//3 Actually send the email
    transporter.sendMail(mailOption);
};

module.exports=sendEmail;