const userdb=require('../models/user');
const bcrypt=require('bcryptjs');
const nodemailer=require('nodemailer');
const jwt=require('jsonwebtoken');

const keysecret=process.env.SECRET_KEY

//email config
const transporter=nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:465,
    secure:true,
    service:'gmail',
    auth:{
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
})


//For User Registration

const register=async(req,res)=>{
    const {fname,lname,email,password,cpassword}=req.body


    try{
        const preuser=await userdb.findOne({email:email})
        if(preuser){
            return res.status(422).json({error:"This Email Already Register"})
        }else if(password !== cpassword){
            return res.status(422).json({error:"Password and Confirm Password not Match"})

        }else {
            const finalUser=new userdb({
                fname,lname,email,password,cpassword
            });
            const storeData=await finalUser.save();

            return res.status(201).json({ status:201, storeData})
            
        }
    }catch (error){
        console.log(`Error : ${error}`);
        return res.status(400).json(error)
    }

}

// user login

const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).json({ error: "Fill all the details" });
    }

    try {
        const userValid = await userdb.findOne({ email });

        if (!userValid) {
            return res.status(422).json({ error: "Invalid User" });
        }

        const isMatch = await bcrypt.compare(password, userValid.password);
        if (!isMatch) {
            return res.status(422).json({ error: "Invalid User" });
        }

        const token = await userValid.generateAuthtoken();
        res.cookie("usercookie", token, {
            expires: new Date(Date.now() + 9000000),
            httpOnly: true
        });

        const result = {
            userValid,
            token
        };
        return res.status(200).json({ status: 200, result }); // Send success response
    } catch (error) {
        console.log(`Error: ${error}`);
        return res.status(500).json({ error: "Internal Server Error" });
        // Send internal server error response
    }
};




 // user Valid 
 
 const validuser = async(req,res)=>{
        try {
            const validUserOne= await userdb.findOne({_id: req.userId})
            return res.status(201).json({status:201, validUserOne})
        } catch (error) {
            return res.status(401).json({status:401, error})
        }
 }

//user logout
const logout = async(req,res)=>{
    try {
        req.rootUser.tokens=req.rootUser.tokens.filter((curelem)=>{
            return curelem.token !== req.token
        })
        await req.rootUser.save()

            res.clearCookie("usercookie", {path:"/"});

            return res.status(201).json({status: 201})
        
    } catch (error) {
        return res.status(401).json({status : 401, error})
        console.log(error);
    }
}

// send email Link for reset Password

const sendPasswordLink= async (req,res)=>{
    console.log(req.body);

    const {email}=req.body

    if(!email){
        res.status(401).json({status: 401, message: "Enter your Email"})
    }
    try {
        const userfind=await userdb.findOne({email: email});

        //token generate for reset password
        const token = jwt.sign({_id: userfind._id}, keysecret,{
            expiresIn:"1d"
        })

        const setusertoken=await userdb.findByIdAndUpdate({_id: userfind._id},{verifytoken: token},{new: true});

        if(setusertoken){
            const mailOptions ={
                from:process.env.EMAIL,
                to:email,
                subject:"Sending Email for Password Reset",
                text:`This Link Valid for 2 Minutes http://localhost:3000/reset-password-email/${userfind._id}/${setusertoken.verifytoken}`

            }
            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("error",error);
                    res.status(401).json({status:401, message:"Email not send"})
                }else{
                    console.log("Email send", info.response);
                    res.status(201).json({status:201, message:"Email sent Successfully"})
                }
            })
        }
    } catch (error) {
        res.status(401).json({status:401,message:"Invalid User"})
    }
};
// verify user for forgot password time
const forgotPassword=async (req,res)=>{
    const {id, token} = req.params;

    try {
        const validuser = await userdb.findOne ({_id: id, verifytoken:token})

        const verifytoken = jwt.verify(token, keysecret);
        console.log(verifytoken);

        if(validuser && verifytoken._id){
            res.status(201).json({status:201, validuser})
        }else {
            res.status(401).json({status:401, message:"User not exist"})
        }
    } catch (error) {
        res.status(401).json({status:401, error})
    }
}

//change password

const changePassword= async (req,res)=>{
    const {id, token}=req.params;
    const {password}=req.body;

    try {
        const validuser =await userdb.findOne({_id: id, verifytoken:token});

        const verifytoken=jwt.verify(token,keysecret);

        if(validuser && verifytoken._id){
            const newpassword =await bcrypt.hash(password,12);

            const setnewuserpass = await userdb.findByIdAndUpdate({_id:id},{password:newpassword});

            setnewuserpass.save()
            res.status(201).json({status:201, setnewuserpass})
        }else{
            res.status(401).json({status: 401, message:"user not exist"})
        }
    } catch (error) {
        res.status(401).json({status:401, error})
        
    }
}     

module.exports={register,login,validuser,logout,sendPasswordLink,forgotPassword,changePassword}