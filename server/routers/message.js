const express = require('express');
const {sendEmailToLeads}= require('../controllers/message');

const router=express.Router()

// Route to send email to all leads
router.post('/send-email', sendEmailToLeads);

module.exports = router;