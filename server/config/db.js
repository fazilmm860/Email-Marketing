const mongoose=require('mongoose');


const db=async()=>{
    try {
        mongoose.connect(process.env.DB_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        const db = mongoose.connection;
        db.on('error',console.error.bind(console,'MongoDB connection error'));
        db.once('open',()=>{
            console.log(`Connected to MongoDB`);
        })
    } catch (error) {
        console.log(`MongoDB Error From Catch: ${error}`);
    }
    
}



module.exports=db;