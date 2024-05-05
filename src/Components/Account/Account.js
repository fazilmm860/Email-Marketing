import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LeftSideBar from "../LeftSideBar/LeftSideBar";
import axios from 'axios';
const  Account=()=>{
  const [validUserData, setValidUserData] = useState(null);

  useEffect(()=>{
    //Fetch product iD and user status when the component mounts
    
    const fetchData=async()=>{
      try{

          let token = localStorage.getItem("userdatatoken")
          const url ='http://localhost:8080/api/validuser'
          const response =await axios.get(url,{
            headers:{
              'Content-Type':"application/json",
              'Authorization':token,
              Accept:'application/json'
            },
            withCredentials: true
          })
          const data = response.data;
        console.log(data);

        if (data.status === 201) {
          // Update product ID and user status
          setValidUserData(data.validUserOne);
          console.log(data.validUserOne);
        } else {
          console.log("Error fetching user data");
        }
      }catch(error){
        console.error("Error fetching user data :", error);
      }
    }
    fetchData();
  },[])
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          {/* <!-- Page Title Header Starts--> */}
          <div className="row page-title-header">
            <div className="col-12">
              <div className="page-header">
                <h4 className="page-title">Account</h4>
                
              </div>
            </div>

          </div>
          {/* <!-- Page Title Header Ends--> */}
          <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-12">
                      
                      <p className="account-details">Name : { validUserData && validUserData.fname} { validUserData && validUserData.lname}</p>
                      <p className="account-details">Email ID :  { validUserData && validUserData.email}</p>
                      <p className="account-details">Password : ************  <Link to='/reset-password-email'> <button type="button" className="password-button">Change Password</button></Link></p>
                     
                      

                    

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>






        </div>
        {/* <!-- content-wrapper ends -->
      <!-- partial:partials/_footer.html --> */}
        <footer className="footer">
          <div className="container-fluid clearfix">
            <span className="text-muted d-block text-center text-sm-left d-sm-inline-block">Email Marketing App</span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"> ©  <a href="" target="_blank">Email Marketiong</a> 2024</span>
          </div>
        </footer>
        {/* <!-- partial --> */}
      </div>
    )
  }


export default Account
