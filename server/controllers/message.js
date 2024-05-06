const nodemailer = require('nodemailer');
const leadsdb = require('../models/leads');
const messagedb = require('../models/message');

let totalMailsSent = 0;
let totalMailsDelivered = 0;
let totalMailsFailed = 0;

// Email config
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

const sendEmailToLeads = async (req, res) => {
    try {
        // Retrieve all leads from the database
        const allLeads = await leadsdb.find();

        // Extract email addresses from leads
        const emailList = allLeads.map(lead => lead.email);

        // Create email content
        const mailOptions = {
            from: process.env.EMAIL,
            to: emailList.join(','),
            subject: req.body.subject,
            text: req.body.content
        };

        // Send mail 
        transporter.sendMail(mailOptions, (error, info) => {
            totalMailsSent++;
            if (error) {
                totalMailsFailed++;
                console.log(`Error Occurred while sending Mail: ${error}`);
                return res.status(500).json({
                    success: false,
                    message: "Error Occurred while sending email",
                    error: error.message
                });
            }
            totalMailsDelivered++;
            console.log('Email Sent:', info.response);
            res.status(200).json({
                success: true,
                message: 'Email Sent Successfully'
            });
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({
            success: false,
            message: 'Error from Catch',
            error: error.message
        });
    }
};

const getMailStatistics = (req, res) => {
    res.status(200).json({
        totalMailsSent,
        totalMailsDelivered,
        totalMailsFailed
    });
};

module.exports = {
    sendEmailToLeads,
    getMailStatistics
};
