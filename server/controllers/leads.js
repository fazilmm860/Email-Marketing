const leadsdb = require('../models/leads')

//Adding Leads
const addLeads = async(req,res)=>{
    const {fname,lname,email,mobile,type}= req.body

    try{
        const preleads =await leadsdb.findOne({email:email})
        if(preleads){
            return res.status(422).json({error:"This Email is Already Register"})
        }else{
            const Leads = new leadsdb({fname,lname,email,mobile,type})

            const storeLeads =await Leads.save();
            return res.status(201).json({status:201,storeLeads})
        }
    }catch(error){
        console.log(`Error:${error}`);
        return res.status(400).json({
            success:false,
            message:'Error From Catch',
            error:error.message
        })
    }
}

//View Leads
const viewLeads = async(req,res)=>{
    try {
        //Retrieve All Leads from DB
        const allLeads =await leadsdb.find()
        res.status(200).json({
            success:true,
            message:"All Leads are successfully fetched",
            leads:allLeads
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Error From Catch",
            error:error.message
        })
    }
}

// find One Lead
const findALead = async (req, res) => {
    try {
        const leadType = req.params.type;
        const lead = await leadsdb.findOne({ type: leadType }); // Finding lead by type
        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Lead found successfully",
            lead: lead
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error from Catch",
            error: error.message
        });
    }
};
const findALeadById = async (req, res) => {
    try {
        const leadId = req.params.id; 
        const lead = await leadsdb.findById(leadId); 
        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });
        }
        res.status(200).json({
            success: true,
            message: "Lead found successfully",
            lead: lead
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error from Catch",
            error: error.message
        });
    }
};

// Edit a Lead
const editALead = async (req, res) => {
    try {
        const leadId = req.params.id;
        const { fname, lname, email, mobile, type } = req.body;

        // Update lead information using findByIdAndUpdate
        const updatedLead = await leadsdb.findByIdAndUpdate(
            leadId,
            { fname, lname, email, mobile, type },
            { new: true }
        );

        if (!updatedLead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Lead updated successfully",
            lead: updatedLead
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error from Catch",
            error: error.message
        });
    }
};

// Delete a Lead
const deleteLead = async (req, res) => {
    try {
        const leadId = req.params.id;

        // Check if the lead exists
        const lead = await leadsdb.findById(leadId);
        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found"
            });
        }

        // Delete the lead
        await leadsdb.findByIdAndDelete(leadId);

        res.status(200).json({
            success: true,
            message: "Lead deleted successfully"
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error from Catch",
            error: error.message
        });
    }
};

module.exports = {
    addLeads,
    viewLeads,
    findALead,
    editALead,
    deleteLead,
    findALeadById,
};

