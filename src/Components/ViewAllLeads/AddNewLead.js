import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AddNewLead = () => {
    const [isLead,setIsLead]=useState({
        fname:"",
        lname:"",
        email:"",
        mobile:"",
        type:""
    })
    const handleInputChange = event =>{
        const{name,value}=event.target;
        setIsLead(prevState=>({
            ...prevState,
            [name]:value
        }))
    }
    const handleSubmit = async (event)=>{
        try {
            event.preventDefault()
            if(isLead.fname === ''){
                toast.warning('Please add the First Name')
            }else if(isLead.email === ''){
                toast.warning('Please add your Email Id')
            }else if(isLead.mobile === ''){
                toast.warning('Please add your Mobile Number')
            }else if(isLead.type === 'select'){
                toast.error('Please select the Type')
            }else{
                let leadDataToSend = isLead;
                const url='https://email-marketing-p55w.onrender.com/api/add'
                const res= await axios.post(url,leadDataToSend)
                console.log('leadDataToSend:',leadDataToSend);
                if(res.status === 201){
                    const shouldSave = window.confirm("Are you sure to save the lead?")

                    if(shouldSave){
                        console.log(`Data submitted successfully`);

                        setIsLead({
                            fname:"",
                            lname:"",
                            email:"",
                            mobile:"",
                            type:""
                        })
                    }
                }
                toast.success('The lead is added successfully')
            }
        } catch (error) {
            console.log(error);
          toast.error('Error In Occured Please try again')
        }
    }
    const handleCancel = () => {
        setIsLead({
            fname: "",
            lname: "",
            email: "",
            mobile: "",
            type: ""
        });
    };
  return (
    <div className="main-panel">
    <div className="content-wrapper">
      {/* <!-- Page Title Header Starts--> */}
      <div className="row page-title-header">
        <div className="col-12">
          <div className="page-header">
            <h4 className="page-title">Add Notification Dashboard</h4>
           
          </div>
        </div>
      </div>
      {/* <!-- Page Title Header Ends--> */}

      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body ">
                  
                 
            <form >
              
                  <div className="row">
                   
                      <div className="col-12">
                        <h1>Add New Lead</h1>
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mb-3">
                        <label htmlFor="exampleFormControlInput5">First Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput5" placeholder="First Name"onChange={handleInputChange} name='fname' value={isLead.fname}
                        />
                        
                      </div>

                      <div className="col-12 col-lg-6 col-md-6 mb-3">
                        <label htmlFor="exampleFormControlInput4">Last Name</label>
                        <input type="text" 
                        className="form-control" 
                        id="lname" 
                        name='lname'
                        value={isLead.lname}
                        onChange={handleInputChange}
                        placeholder="Last Name" 
                       />
                       
                      </div>
                      
                      <div className="col-12 col-lg-6 col-md-6 mb-3">
                        <label htmlFor="exampleFormControlInput4">Email</label>
                        <input type="email" 
                        className="form-control" 
                        id="email" 
                        name='email'
                        value={isLead.email}
                        onChange={handleInputChange}
                        placeholder="Email ID" 
                       />
                        
                      </div>
                      <div className="col-12 col-lg-6 col-md-6 mb-3">
                          <label htmlFor="exampleFormControlInput5">Mobile</label>
                          <input type="text" className="form-control" id="exampleFormControlInput5" placeholder="Mobile Number" name='mobile'onChange={handleInputChange} value= { isLead.mobile}  
                        />
                         
                      </div>
                      
                     

                                         <div className="col-12 col-lg-6 col-md-6 mb-3">
                                            <label htmlFor="exampleFormControlInput5">Select Type</label>
                                            <select
                                                className="form-control"
                                                id="exampleFormControlInput5"
                                                name='type'
                                                onChange={handleInputChange}
                                                value={isLead.type}
                                            >
                                                <option value="select"name='type'>select</option>
                                                <option value="customer"name='type'>customer</option>
                                                <option value="re-seller"name='type'>re-seller</option>
                                            </select>
                                        </div>

                      
                     
                     
                      <div className="mt-4 mb-5 p-2">
                        <button type="submit" className="btn btn-primary mb-2" onClick={handleSubmit}> Add Notication </button>
                      </div>
                      
                        <div className="mt-4 mb-5 p-2">
                       <button type="button"  className="btn btn-danger mb-2"onClick={handleCancel}> Cancel </button>
                        </div>
                        
                      
                  </div>
              </form>
             <ToastContainer/>
            </div>
          </div>
        </div>
        
      </div>

    </div>

    <footer className="footer">
      <div className="container-fluid clearfix">
        <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">
         Email Marketing App
        </span>
        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
          {" "}
          ©{" "}
          <a href="" target="_blank">
           Email Marketing
          </a>{" "}
          2024
        </span>
      </div>
    </footer>
  </div>
  )
}

export default AddNewLead
