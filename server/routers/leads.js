const express = require('express')
const  {
    addLeads,
    viewLeads,
    findALead,
    editALead,
    deleteLead
} = require('../controllers/leads')

const router=express.Router()

// Route to add a new lead
router.post('/add', addLeads);

// Route to view all leads
router.get('/view', viewLeads);

// Route to find a lead by type
router.get('/find/:type', findALead);

// Route to edit a lead
router.put('/edit/:id', editALead);

// Route to delete a lead
router.delete('/delete/:id', deleteLead);

module.exports = router;
