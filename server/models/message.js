const mongoose = require('mongoose');

const meassageSchema=new mongoose.Schema({

    subject:{
        type:String
    },
    content:{
        type:String,
    }
   
})

//creating model
const meassagedb=new mongoose.model('Meassage',meassageSchema)

module.exports=meassagedb;