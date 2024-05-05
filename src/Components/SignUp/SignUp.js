import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";



const SignUp = () => {
  const navigate = useNavigate();
const [userData,setUserData]=useState({
   fname:"",
   lname:"",
   email:"",
   password:"",
   cpassword:"",
   terms:"",
})
 const handleInputChange = event =>{
  const {name,value} = event.target;
  setUserData({
    ...userData,
    [name]:value,
  })
 }

 const handleSubmit = async (event)=>{
  try {
    event.preventDefault();

    //validation click
    if(userData.fname === ''){
      toast.warning('Please add the First Name')
    }else if(userData.email === ''){
      toast.warning('Please add your email')
    }else if(userData.password ===''){
      toast.warning("Please add your passsword")
    }else if(userData.cpassword === ''){
      toast.warning("Please confirm your password")
    }else if(userData.password !== userData.cpassword){
      toast.error("Password and Confirm Password Mismatch")
    }else{
      let userDataToSend= userData;
      const url= 'http://localhost:8080/api/register'
      const response = await axios.post(url,userDataToSend)
      console.log('userDataToSend:',userDataToSend);
      if(response.status === 201){
        const shouldSave = window.confirm('Are you sure to add the User');
        if(shouldSave){
          console.log('User Added Successfully');

          setUserData({
            fname:"",
            lname:"",
            email:"",
            password:"",
            cpassword:""
          })
          toast.success("The User added Successfully")
          navigate('/');
        }
      }
    }
  } catch (error) {
    console.log(error);
    toast.error('Error In Occured Please try again')
  }
 }
  
    return (
      <>
        <div className="pt-4 pb-4"></div>
        <div className="container">
          <div className="row ">
             
                  <div className="col-12 col-lg-3"></div>
                  <div className="col-12 col-lg-6 ">

                  
                    
                    <form >
                          
                          <div className="mb-4">
                            <input
                              className="input-field"
                              type="text"
                              placeholder="First Name"
                              name="fname"
                              value={userData.fname}
                              onChange={handleInputChange}
                            />
                          
                          </div>
                          <div className="mb-4">
                            <input
                              className="input-field"
                              type="text"
                              placeholder="Last Name"
                              name="lname"
                              value={userData.lname}
                              onChange={handleInputChange}  
                            />
                          </div>
                          <div className="mb-4">
                            <input
                              className="input-field"
                              type="text"
                              placeholder="Email"
                              name="email"
                              value={userData.email}
                              onChange={handleInputChange}
                            />
                           
                          </div>
                          <div className="mb-4">
                            <input
                              className="input-field"
                              type="password"
                              placeholder="Password"
                              name="password"
                              value={userData.password}
                              onChange={handleInputChange}
                            />
                          
                          </div>
                          <div className="mb-4">
                            <input
                              className="input-field"
                              type="password"
                              placeholder="Confirm password"
                              name="cpassword"
                              value={userData.cpassword}
                              onChange={handleInputChange}
                            />
                            
                          </div>

                          
                          <div className="mb-4">
                            <input type="checkbox" id="terms" name="terms" value="terms"
                             />
                            <label className="terms-text">
                              {" "}
                              Agree to our <a href="">terms and conditions</a>
                            </label>
                          </div>
                        <button className="signin-button mb-5" type="submit" onClick={handleSubmit} >Sign Up</button>                    
      
                      <div className="text-center">
                      <p>Already have an account?</p>
                        <Link className="link" to="/"><button className='signup-button' type="button">Sign In</button></Link>
                      </div>
                   </form>
                   <ToastContainer/>
                  </div>
                <div className="col-12 col-lg-3"></div>
              
          </div>
        </div>
      </>
    );
  }

export default SignUp;
