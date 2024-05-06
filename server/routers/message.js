const express = require('express');
const {sendEmailToLeads,getMailStatistics }= require('../controllers/message');

const router=express.Router()

// Route to send email to all leads
router.post('/send-email', sendEmailToLeads);

// Route to get email statistics
router.get('/mail-statistics', getMailStatistics);

module.exports = router;