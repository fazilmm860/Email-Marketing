const mongoose = require('mongoose');

const leadsSchema=new mongoose.Schema({

    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
       
    },
    mobile:{
        type:String
    },
    type:{
        type:String,
    }
   
})

//creating model
const leadsdb=new mongoose.model('Leads',leadsSchema)

module.exports=leadsdb;