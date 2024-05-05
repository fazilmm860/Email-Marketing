const express=require('express')
require ('dotenv').config();
const cors=require('cors');

const db=require('./config/db');
const userRoutes=require('./routers/user')

const app= express();
const port=process.env.PORT || 5555

app.use(express.json())

db();

app.use(cors({
    origin: 'http://localhost:3001',
    credentials: true  // Allow cookies to be sent with the request
  }));

  app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use('/api',userRoutes)

app.listen(port,()=>{
    console.log(`Server Connected  - ${port}`);
})