const nodemailer =require('nodemailer')
const leadsdb = require('../models/leads');
const messagedb= require('../models/message');


//email config
const transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    service:'gmail',
    auth:{
        user:process.env.EMAIl,
        pass:process.env.PASSWORD
    }
})

const sendEmailToLeads = async (req,res)=>{
    try {
        //Retriev all leads from db
        const allLeads=await leadsdb.find();

        //Extract email address from Leads
        const emailList =allLeads.map(lead=>lead.email);

        //Create email content
        const mailOptions ={
            from:process.env.EMAIL,
            to:emailList.join(','),
            subject:req.body.subject,
            text:req.body.content

        }
        //Send Mail 
        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log(`Error Occured while sending Mail: ${error}`);
                return res.status(500).json({
                    success:false,
                    message:"Error Occured while sending email",
                    error:error.message
                })

            }
            console.log('Email Sent:',info.response);
            res.status(200).json({
                success:true,
                message:'Email Sent Successfully'
            });
        });
    } catch (error) {
        console.log(`Error:${error}`);
        res.status(500).json({
            success:false,
            message: 'Error from Catch',
            error: error.message
        })
    }
}

module.exports = {
    sendEmailToLeads
};