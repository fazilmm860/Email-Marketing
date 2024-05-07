const mongoose = require('mongoose');

const meassageSchema=new mongoose.Schema({
    from:{
        type:String
    },
    to:{
        type:String,
    },
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