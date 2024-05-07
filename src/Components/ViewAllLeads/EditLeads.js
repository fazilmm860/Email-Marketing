import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast,ToastContainer } from 'react-toastify';


const EditLeads = ()=>{

    
    const {userId} =useParams();

    const [isLeadData, setIsLeadData]=useState({
       fname:'',
       lname:'',
       email:'',
       mobile:'',
       type:''
    });
    useEffect(() => {
        const fetchLeads = async () => {
          try {
            const url = 'https://email-marketing-p55w.onrender.com/api/findById'
            const response = await axios.get(`${url}/${userId}`);
            const leadData = response.data.lead;
            console.log(leadData);
           
            setIsLeadData(leadData);
          } catch (error) {
            console.error(`Error in fetching user data`, error);
          }
        };
        fetchLeads();
      }, [userId]);
      const handleChange = (event) => {
        const { name, value } = event.target;
       setIsLeadData(prevUserData => ({
            ...prevUserData,
            [name]: value
        }));
    };
     const handleSaveUser = async (event)=>{
        
        try {
            event.preventDefault();
            const url ='http://localhost:8080/api/edit'
            const response = await axios.put(`${url}/${userId}`, isLeadData)
            const updatedLead = response.data.lead;
           setIsLeadData(updatedLead)
            console.log("Lead updated successfully:", updatedLead);
            toast.success("Lead updated successfully");
        } catch (error) {
            console.error(`Error in updating user`, error);
            toast.error("Error updating user");
        }
     }
      return (
     <div className="main-panel">
        <div className="content-wrapper">
          {/* <!-- Page Title Header Starts--> */}
          <div className="row page-title-header">
            <div className="col-12">
              <div className="page-header">
                <h4 className="page-title">Edit Dashboard</h4>
                <div className="quick-link-wrapper w-100 d-md-flex flex-md-wrap">
                 
                 
                </div>
              </div>
            </div>
          </div>
          <div className="row">
              <div className="col-md-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                        
                       
                  <form >
                        <div className="row">
                            <div className="col-12">
                              <h1>Edit The Lead </h1>
                              
                            </div>
  
                            <div className="col-12 col-lg-6 col-md-6 mb-3">
                              <label htmlFor="exampleFormControlInput1">Name</label>
                              <input 
                              type="text"
                               className="form-control" 
                               id="fname"
                               placeholder="Enter User " 
                               name='fname'
                               onChange={handleChange}
                               value={isLeadData.fname}
                              />
                            </div>
  
                            <div className="col-12 col-lg-6 col-md-6 mb-3">
                              <label htmlFor="exampleFormControlInput2">Last Name</label>
                              <input type="text"
                               className="form-control"
                               id="exampleFormControlInput2" 
                               placeholder="Enter Last Name" 
                               name='lname'
                               onChange={handleChange}
                               value={isLeadData.lname}
                              />
                             
                            </div>
  
                            <div className="col-12 col-lg-6 col-md-6 mb-3">
                              <label htmlFor="exampleFormControlInput3">Email</label>
                              <input type="email"
                               className="form-control"
                               id="exampleFormControlInput3" 
                               placeholder="Enter Email ID" 
                               name='email'
                               onChange={handleChange}
                               value={isLeadData.email}
                             />
                             
                            </div>
  
                          
  
                            <div className="col-12 col-lg-6 col-md-6 mb-3">
                              <label htmlFor="exampleFormControlInput3">Mobile Number</label>
                              <input type="number" 
                              className="form-control" 
                              id="exampleFormControlInput3" 
                              placeholder="Enter Mobile Number" 
                              name='mobile'
                              onChange={handleChange}
                              value={isLeadData.mobile}
                              />
                              
                            </div>
                            
                          
  
                           
  
                            <div className="col-12 col-lg-6 col-md-6 mb-3">
                                <label htmlFor="exampleFormControlInput5">User Type</label>
                          
                                <input type="text"
                                className="form-control"
                                id="exampleFormControlInput4"
                                placeholder=""
                                name='type'
                                onChange={handleChange}
                                value={isLeadData.type}
                             />
                            </div>
                           
                           
  
                            
  
                           
                          
                          
                            <div className="mt-4 mb-5 p-2">
                           <button type="submit" className="btn btn-primary mb-2" onClick={handleSaveUser}>Update  User </button>
                            
                            </div>
                            
                              <div className="mt-4 mb-5 p-2">
                              <Link to='/view-leads'><button type="button"  className="btn btn-danger mb-2"> Cancel </button></Link>
                              </div>
                              
                            
                        </div>
                    </form>
                    <ToastContainer />

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

  

export default EditLeads